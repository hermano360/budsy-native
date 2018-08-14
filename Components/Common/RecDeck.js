import React, {Component} from 'react'
import {
  Animated,
  View,
  Text,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = .25 * SCREEN_WIDTH
const SWIPE_OUT_DURATION = 250

export class RecDeck extends Component{

  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }
  constructor(props) {
    super(props)
    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy})
      },
      onPanResponderRelease: (event, gesture) => {
        if(gesture.dx > SWIPE_THRESHOLD){
          this.forceSwipe('right')
        } else if(gesture.dx < -SWIPE_THRESHOLD){
          this.forceSwipe('left')
        } else {
          this.resetPosition()
        }
      }
    })
    this.panResponder = panResponder
    this.position = position
    this.state = {
      index: 0,
      selected: null
    }
  }

  onSwipeComplete(direction){
    const {onSwipeLeft, onSwipeRight, data} = this.props
    const item = data[this.state.index]
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)
    this.position.setValue({x: 0, y: 0})
    this.setState(({index}) => {
      return {
        index: index + 1
      }
    })
  }

  flashThumb = (selected) => {
    this.setState({selected})
  }

  forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
    direction === 'right' ? this.flashThumb('up') : this.flashThumb('down')
    Animated.timing(this.position, {
      toValue: {x, y: 0},
      duration: SWIPE_OUT_DURATION
    }).start(()=>{
      this.onSwipeComplete(direction)
      this.setState({selected: null})
    })
  }

  resetPosition(){
    Animated.spring(this.position, {
      toValue: {x: 0, y: 0}
    }).start()
  }

  getCardStyle(){
    const {position} = this
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })
    return {
      ...position.getLayout(),
      transform: [{rotate}]
    }
  }

  testSwipe(direction){
    console.log(direction)
  }



  renderCards = () => {
    const {index, selected} = this.state
    if(this.state.index >= this.props.data.length){
      return this.props.renderNoMoreCards()
    }
    return this.props.data.map((item, i) => {
      if(i < index) return null
      if(i === index){
        return (
          <Animated.View
            key={item.name}
            style={[this.getCardStyle(),styles.cardStyle, {zIndex: i * -1}]}
            {...this.panResponder.panHandlers}
            >
            {this.props.renderCard(item, i, this.forceSwipe, selected)}
          </Animated.View>
        )
      }
      return (
        <Animated.View
          key={item.name}
          style={[styles.cardStyle, {
            zIndex: i * -1,
            top: 2 * (i - index),
            right: 2 * (i - index)
          }]}
          >
          {this.props.renderCard(item, i, this.forceSwipe, null)}
        </Animated.View>
      )
    })


  }
  render(){
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
}
