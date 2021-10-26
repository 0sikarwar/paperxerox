import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  Modal as ModalRN,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {primaryColor} from '../../styles/Color';
import Styles from './modalStyle';
import {Text} from './Text';

interface modalProps {
  showModal: boolean;
  onRequestClose: () => void;
  slideFrom?: 'bottom' | 'left';
  showCrossBtn?: boolean;
}
const deviceWidth = Dimensions.get('window').width;
const Modal: React.FC<modalProps> = ({
  showModal,
  onRequestClose,
  slideFrom,
  showCrossBtn,
  children,
}) => {
  const [modalX, setModalX] = useState(new Animated.Value(-deviceWidth));
  const isBottom = slideFrom === 'bottom';
  const isLeft = slideFrom === 'left';
  useEffect(() => {
    if (showModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [showModal]);
  const openModal = () => {
    Animated.timing(modalX, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  const closeModal = () => {
    Animated.timing(modalX, {
      duration: 300,
      toValue: -deviceWidth,
      useNativeDriver: true,
    }).start();
  };
  const overlayPositionStyle = isBottom
    ? Styles.bottomModalOverLay
    : isLeft
    ? Styles.leftModalOverLay
    : {};
  const containerPositionStyle = isBottom
    ? Styles.bottomModalContainer
    : isLeft
    ? Styles.leftModalContainer
    : {};
  const modalAnimationType = isBottom ? 'slide' : isLeft ? 'none' : 'fade';
  return (
    <ModalRN
      transparent={true}
      visible={showModal}
      onRequestClose={onRequestClose}
      animationType={modalAnimationType}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <Animated.View
          style={[
            Styles.animatedViewContainer,
            {transform: [{translateX: !isLeft ? 0 : modalX}]},
          ]}>
          <View style={[Styles.modalOverlay, overlayPositionStyle]}>
            <TouchableWithoutFeedback>
              <View style={[Styles.modalContainer, containerPositionStyle]}>
                {showCrossBtn && (
                  <TouchableOpacity
                    onPress={onRequestClose}
                    style={Styles.modalCrossBtn}>
                    <Text style={{fontWeight: 'bold', color: primaryColor}}>
                      X
                    </Text>
                  </TouchableOpacity>
                )}
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </ModalRN>
  );
};

export default Modal;
