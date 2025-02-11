import { css } from "lit";

export default css`
  /* Styling for the 'alpha' text */
  #alpha-text {
    position: absolute;  /* Position it absolutely within the card */
    top: 10px;           /* 10px from the top */
    right: 10px;         /* 10px from the right */
    color: red;          /* Red text */
    font-size: 18px;     /* Adjust font size */
    font-weight: bold;   /* Optional: make the text bold */
  }
  .button {
    padding: 4px 8px;
    font-size: 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  button:disabled {
    background-color: #ccc; // Light grey
    cursor: not-allowed;
  }
  #canvas {
    display: block;
    width: 100%;
    min-width: 256px
    max-width: 512px;
    height: auto;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: var(--card-background-color);
  }
  .popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: min(calc(100vw - 70px), 512px);
    max-height: calc(90vh - 90px);
    overflow-y: auto;
    transform: translate(-50%,-50%);
    background-color: var(--card-background-color, white);
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow-y: auto;
    z-index: 1000;
  }
  .popup-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .popup-button-container {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    gap: 10px;
  }
  .popup-header {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .popup-content {
    font-size: 14px;
    display: flex;
    flex-direction: column; 
    overflow: hidden;
  }
  .checkbox-list {
    padding: 0;
    overflow-y: auto;    
    display: flex;
    flex-wrap: wrap;
    max-height: 220px;
    width: 100%;
    max-width: 100%;
    flex-shrink: 1;
  }
  .checkbox-object {
    width: calc(50% - 10px);
    align-items: left;
  }
`;