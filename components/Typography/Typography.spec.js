import { shallow, mount } from 'enzyme';
import Typography from '.';

describe('<Typography />', () => {
  it('renders h1', () => {
    const wrapper = mount(<Typography variant="h1" />);
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
  });

  it('renders h2', () => {
    const wrapper = mount(<Typography variant="h2" />);
    const elem = wrapper.find('h2');
    expect(elem.length).toBe(1);
  });
});
