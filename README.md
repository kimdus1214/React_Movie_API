# React Movie API
영화 데이터를 불러와, 클릭시 해당 영화의 정보를 출력해주는 사이트를 구현해보았다.   
[참고 : 현재 백엔드 폴더 업로드 x → 로그아웃 기능 주석 처리 해놓음]   
<br />   

[Home]   
원하는 영화 클릭시 해당 영화에 대한 정보 페이지가 뜬다.   
<br />   
<hr>   
<br />   

[movie/:movieId]  
useParams는 URL 매개변수의 키/값 쌍의 개체를 반환한다.   
현재 Route의 match.params에 액세스하는 데 사용!   

```javaScript
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

let {movieId} = useParams();
```
<br />   

[withRouter]   
라우트에 의해 호출된 컴포넌트가 아니라도, 라우터에서 사용하는 객체(location, match, history)를 사용하려면 withRouter라는 Hoc을 사용해야한다.   
```javaScript
//src/components/subcomponents.js
import React from 'react';
import { withRouter } from 'react-router-dom';

const SubComponents = withRouter(({ match, location }) => {
  return <div>현재 위치: {location.pathname}</div>;
});

export default SubComponents;
```

```javaScript
//src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import SubComponents from 'components/SubComponents';


const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about/:name?" component={About} />
      <SubComponents />
    </div>
  );
};

export default App;
```

