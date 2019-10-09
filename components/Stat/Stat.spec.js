import { shallow } from 'enzyme';
import Stat from '.';

describe('<Stat />', () => {
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
