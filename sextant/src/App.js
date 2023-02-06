import './App.css';
import Tabs from './Components/Tabs';
import Banner from './Components/Banner';
import Exhibit from './Components/Exhibit';

function App() {
  let tabList = ["Line", "Paragraph", "Multiple Paragraphs"]
  let childList = [<p>Ut consectetur est ex culpa nisi anim pariatur cupidatat in aliqua.</p>,
  <p>Laborum ullamco magna adipisicing tempor. Elit culpa labore mollit esse reprehenderit minim magna occaecat id commodo quis adipisicing. Esse pariatur officia pariatur in irure anim eiusmod ullamco elit ullamco amet nulla incididunt. Consequat elit amet irure dolor. Magna pariatur in dolor mollit labore excepteur. Nisi cillum ex consequat velit voluptate ullamco. Eu ullamco laboris sit culpa duis aliqua exercitation fugiat in ad minim laborum adipisicing.</p>,
  <p>Enim eiusmod aliquip nisi veniam labore dolore esse exercitation et qui minim occaecat consequat commodo. Velit labore id eu adipisicing. Qui exercitation incididunt occaecat esse labore ad proident in sint commodo commodo ullamco velit.

Tempor irure dolore veniam anim duis adipisicing. Sunt minim sit enim deserunt aute veniam occaecat aliquip sit. Duis sunt ullamco ut ex veniam nostrud aute reprehenderit do duis laborum occaecat. Veniam eu officia enim sunt dolore consectetur dolore ipsum. Exercitation eu aliqua exercitation exercitation ut irure non duis velit laboris. Adipisicing incididunt mollit veniam non.

Laborum esse id elit commodo quis exercitation. Ut velit ad est qui reprehenderit cupidatat deserunt duis minim id laborum duis. Sunt elit ullamco fugiat eu anim aliquip. Sint duis cillum nulla ullamco ut dolor eu consequat voluptate commodo excepteur qui.</p>]
  
  let eList = [<Exhibit
    title="Test Exhibit # 1"
    children={<Tabs tabs={tabList} children={childList}/>}
    />,
    <Exhibit
    title="Test Exhibit # 2"
    children={<Tabs tabs={tabList} children={childList}/>}
    />,
    <Exhibit
    title="Test Exhibit # 3"
    children={<Tabs tabs={tabList} children={childList}/>}
    />,
    <Exhibit
    title="Test Exhibit # 4"
    children={<Tabs tabs={tabList} children={childList}/>}
    />,
    <Exhibit
    title="Test Exhibit # 5"
    children={<Tabs tabs={tabList} children={childList}/>}
    />,
    <Exhibit
    title="Test Exhibit # 6"
    children={<Tabs tabs={tabList} children={childList}/>}
    />]

  return (
    <div className="App">
      <Banner 
      title={document.title}
      />
      <div className="Exhibits">
        {eList}
      </div>
    </div>
  );
}

export default App;
