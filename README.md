# React Movie API
영화 데이터를 불러와 출력해주는 사이트를 구현해보았다.

[Home]   
원하는 영화 클릭시 해당 영화에 대한 정보 페이지가 뜬다.   
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

