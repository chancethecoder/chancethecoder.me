import React from 'react';
import { Link } from "react-router-dom"
import { Button, Space } from 'antd';
import {
  HomeOutlined,
  LeftOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class BlockudokuClone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      score: null,
      cells: null,
      blocks: null,
    }

    this.generateBlocks = this.generateBlocks.bind(this)
    this.handleContinueGame = this.handleContinueGame.bind(this)
    this.handleGoToIndex = this.handleGoToIndex.bind(this)
    this.handleNewGame = this.handleNewGame.bind(this)
    this.handleSetting = this.handleSetting.bind(this)
    this.handleClickBlock = this.handleClickBlock.bind(this)
  }

  generateBlocks(n) {
    return Array.from({length: n}, (v, k) => k).map(k => ({
      id: `block-${k}`,
      shape: [
        [true, true, true],
      ],
    }))
  }

  handleClickBlock(e) {
    console.log(e)
  }

  handleContinueGame() {
    if (this.state.score != null && this.state.cells != null) {
      this.setState({
        isPlaying: true,
      })
    } else {
      this.handleNewGame()
    }
  }

  handleGoToIndex() {
    this.setState({
      isPlaying: false,
    })
  }

  handleNewGame() {
    this.setState({
      isPlaying: true,
      score: 0,
      cells: [
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
        [ false, false, false, false, false, false, false, false, false ],
      ],
      blocks: this.generateBlocks(3),
    })
  }

  handleSetting() {
    alert('on develop!')
  }

  render() {
    // using some little inline style helpers to make the app look okay(보기좋게 앱을 만드는 인라인 스타일 헬퍼)
    const grid = 8;
    const getItemStyle = (draggableStyle, isDragging) => ({
      // some basic styles to make the items look a bit nicer(아이템을 보기 좋게 만드는 몇 가지 기본 스타일)
      userSelect: 'none',
      padding: grid * 2,
      marginBottom: grid,

      // change background colour if dragging(드래깅시 배경색 변경)
      background: isDragging ? 'lightgreen' : 'grey',

      // styles we need to apply on draggables(드래그에 필요한 스타일 적용)
      ...draggableStyle
    });
    const getListStyle = (isDraggingOver) => ({
      background: isDraggingOver ? 'lightblue' : 'lightgrey',
      padding: grid,
      width: 250
    });

    const InGameView = <Space direction="vertical" size="large">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button type="link" icon={<LeftOutlined />} size='large' onClick={this.handleGoToIndex} />
        <Button type="link" icon={<SettingOutlined />} size='large' onClick={this.handleSetting} />
      </div>
      <div style={{ textAlign: 'center', background: '' }}>
        <h2>{this.state.score}</h2>
      </div>
      <table style={{ border: '2px solid #6c757d' }}>
        <tbody>
          {this.state.cells && this.state.cells.map((row, i) => {
            return <tr key={i}>
              {row.map((isFilled, j) => {
                return <td key={j} style={{
                  width: 30,
                  height: 30,
                  border: isFilled ? '2px solid #6c757d' : '1px solid #6c757d',
                  background: isFilled ? '#1890ff' : 'none',
                }}/>
              })}
            </tr>
          })}
        </tbody>
      </table>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        {this.state.blocks && this.state.blocks.map((block) => {
          return <table onClick={this.handleClickBlock}>
            <tbody>
              {block.shape.map((row, i) => {
                return <tr key={i}>
                  {row.map((isFilled, j) => {
                    return <td key={j} style={{
                      width: 20,
                      height: 20,
                      border: isFilled ? '1px solid #6c757d' : '1px solid #6c757d',
                      background: isFilled ? '#1890ff' : 'none',
                    }}/>
                  })}
                </tr>
              })}
            </tbody>
          </table>
        })}
      </div>

      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.blocks.map(item => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableStyle,
                          snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                        {item.shape}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Space>

    const IndexView = <Space direction="vertical" size="large" style={{ textAlign: 'center' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Link to="/archive">
          <Button type="link" icon={<HomeOutlined />} size='large'/>
        </Link>
        <Button type="link" icon={<SettingOutlined />} size='large' onClick={this.handleSetting} />
      </div>
      <div>
        <h1>BlockuDoku</h1>
        <h4>This is Blockudoku Clone</h4>
        <span>Note: record is not saved!!</span>
      </div>
      <Button type="primary" shape="round" size="large" block onClick={this.handleContinueGame}>
        Continue
      </Button>
      <Button type="default" shape="round" size="large" block onClick={this.handleNewGame}>
        New Game
      </Button>
    </Space>

    return this.state.isPlaying ? InGameView : IndexView
  }
}

export default BlockudokuClone;
