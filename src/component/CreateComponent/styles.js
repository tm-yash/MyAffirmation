import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  templateMainScreen: {
    flex: 1,
  },
  selectColorView: {
    width: ms(45),
    height: ms(45),
    borderRadius: 25,
  },
  templateMainView: {
    flex: 1,
    height: '100%',
  },
  selectColorMainView: {
    position: 'absolute',
    paddingTop: vs(20),
    backgroundColor: '#ffffff',
    height: 350,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 20,
  },
  allQuotesVIew: {
    paddingTop: vs(20),
  },
  Quotes: {
    width: ms(75),
    height: ms(75),
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
  QuotesTitle: {
    fontSize: 18,
    position: 'absolute',
  },
  QuoteCancelBtn: {
    height: vs(60),
    width: s(153),
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
  },
  QuoteSaveBtn: {
    height: vs(60),
    width: s(153),
    backgroundColor: '#AA67DD',
    borderRadius: 20,
  },
  buttonView: {
    marginTop: 20,
  },
  cancelTitle: {
    fontSize: 20,
    color: '#A6A7A6',
    fontWeight: '600',
  },
  saveTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
  input: {
    padding: 10,
    fontSize: 20,
    color: '#ffffff',
  },
  QuoteBackground1: {
    width: ms(320),
    height: ms(320),
    alignSelf: 'center',
    marginVertical: vs(30),
  },
  CreateQuoteView: {
    paddingHorizontal: s(20),
    marginTop: vs(50),
  },
  somePlaceholderStyle: {
    fontSize: 22,
    color: '#ffffff',
  },
  QuoteBackgroundTitle: {
    color: '#ffffff',
    fontSize: 20,
    paddingTop: vs(20),
  },
});
