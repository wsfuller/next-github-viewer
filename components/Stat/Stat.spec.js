import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Stat from '.';

describe('<Stat />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Stat title="Stat Title" figure={55} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders title & figure', () => {
    const wrapper = shallow(<Stat title="Stat Title" figure={55} />);
    const title = wrapper
      .find('[data-testid="statTitle"]')
      .children()
      .text();
    const figure = wrapper
      .find('[data-testid="statFigure"]')
      .children()
      .text();
    expect(title).toEqual('Stat Title');
    expect(figure).toEqual('55');
  });
});
