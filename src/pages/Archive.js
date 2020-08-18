import React from 'react';
import { Link } from "react-router-dom"
import { Card } from 'antd'

const Archive = () => (
  <div>
    <Card title="Blockudoku Clone App">
      <p>
        This is clone app create by myself. not for commercial, just for fun!
      </p>
      <p>
        Original Game Developed by <a href="https://easybrain.com/" target="_blank" rel="noopener noreferrer">Easybrain</a>
      </p>
      <Link to="/archive/blockudoku">Go To Clone App</Link>
    </Card>
  </div>
)

export default Archive;
