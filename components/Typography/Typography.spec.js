import { shallow, mount } from 'enzyme';
import Typography from '.';

describe('<Typography />', () => {
  it('renders H1', () => {
    const wrapper = render(<Typography variant="h1" />);
    // console.log(wrapper.debug());
    const elem = wrapper;
    console.log(elem.debug());
    expect(elem.contains('h1')).toEqual(true);
  });
});
