import { customElement, property } from "lit/decorators.js";
import { html, LitElement, nothing } from "lit";
import styles from "./vector-ams-card.styles";
import "../components/info-bar/info-bar";

@customElement("vector-ams-card")
export class VectorAmsCard extends LitElement {
  @property() public header;
  @property() public subtitle;
  @property({ type: Object }) public entities;
  @property({ type: Object }) public states;

  static styles = styles;

  temperature() {
    if (this?.entities?.temperature) {
      return `${this.states[this.entities.temperature.entity_id]?.state} ${this.states[this.entities.temperature.entity_id]?.attributes.unit_of_measurement}`;
    }
    return nothing;
  }

  humidity() {
    if (this?.entities?.humidity) {
      return this.states[this.entities.humidity.entity_id]?.state;
    }
    return nothing;
  }

  render() {
    return html`
      <ha-card header="${this.header}">
        <div class="v-wrapper">
          <info-bar
            subtitle="${this.subtitle}"
            humidity="${this.humidity()}"
            temperature="${this.temperature()}"
          ></info-bar>
          <div class="v-ams-container">
            ${this.entities?.spools.map(
              (spool) => html`
                <div class="v-spool-holder">
                  ${this.states[spool.entity_id]?.attributes.type !== "Empty"
                    ? html` <bl-spool
                        ?active=${this.states[spool.entity_id]?.attributes?.active || this.states[spool.entity_id]?.attributes?.in_use}
                        .color="${this.states[spool.entity_id]?.attributes.color}"
                        .remaining="${this.states[spool.entity_id]?.attributes.remain}"
                        .tag_uid="${this.states[spool.entity_id]?.attributes.tag_uid}"
                      ></bl-spool>`
                    : nothing}
                  <div class="v-spool-info">${this.states[spool.entity_id]?.attributes.type}</div>
                </div>
              `
            )}
          </div>
        </div>
      </ha-card>
    `;
  }
}
