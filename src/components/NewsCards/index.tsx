import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import {common} from '../../screens/commonInterfaces';
import NewsCard from './NewsCard';
import Styles from './style';
interface newsCardsProps extends common {
  feeds: {
    feed?: Array<any>;
    srcName?: string;
  };
  isHindi?: boolean;
  activeNewsTab: string;
  setActiveScreen: Function;
}
interface newCardsState {
  totalVisibleItem: number;
  refreshingList: boolean;
}
class NewsCards extends React.Component<newsCardsProps, newCardsState> {
  listRef: any;
  constructor(props: newsCardsProps) {
    super(props);
    this.state = {
      totalVisibleItem: 10,
      refreshingList: false,
    };
    this.listRef = React.createRef();
  }
  handleCardPress = (link: string) => {
    this.props.navigation.navigate('webview', {link});
    this.props.setActiveScreen('webview');
  };
  onViewableItemsChanged = ({viewableItems}: any) => {
    const lastItemIndex = viewableItems[viewableItems.length - 1]?.index;
    if (lastItemIndex === this.state.totalVisibleItem - 9) {
      this.setState({totalVisibleItem: lastItemIndex + 20});
    }
  };
  componentDidUpdate(prevProps: newsCardsProps) {
    if (
      this.listRef.current &&
      (prevProps.isHindi !== this.props.isHindi ||
        prevProps.activeNewsTab !== this.props.activeNewsTab)
    ) {
      this.listRef.current.scrollToIndex({index: 0});
    }
  }
  renderItem = ({item}: any) => (
    <NewsCard
      item={item}
      src={this.props.feeds.srcName}
      onPress={() => this.handleCardPress(item.link[0])}
    />
  );
  handleRefresh = () => {
    this.setState({refreshingList: true});
  };
  render() {
    return (
      <FlatList
        data={
          this.props.feeds.feed
            ? [...this.props.feeds.feed.slice(0, this.state.totalVisibleItem)]
            : null
        }
        ref={this.listRef}
        initialNumToRender={5}
        maxToRenderPerBatch={8}
        onViewableItemsChanged={this.onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 100}}
        onEndReachedThreshold={2}
        removeClippedSubviews
        renderItem={this.renderItem}
        // onRefresh={this.handleRefresh}
        // refreshing={this.state.refreshingList}
      />
    );
  }
}

export default function (props: any) {
  const navigation = useNavigation();
  const {
    state,
    Actions: {setActiveScreen},
  } = useAppContext();
  return (
    <NewsCards
      {...props}
      navigation={navigation}
      setActiveScreen={setActiveScreen}
    />
  );
}
