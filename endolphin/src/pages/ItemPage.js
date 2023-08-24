import { useParams } from 'react-router-dom';
import data from '../data.json';

function ItemPage() {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const item = data.find((item) => item.id === parseInt(id)); // data에서 해당 아이템 찾기

  // 아이템이 존재하지 않는 경우 404 메시지 표시
    if (!item) return <div>404: Item Not Found</div>;

    return (
        <>
          <div className='item-page-title'>
          <h2 className='item-page-title'># {item.name}</h2>
          </div>
          <div>
            <h2 className='item-page-inst'>분리배출 방법</h2>
            <p className='item-page-inst'>{item.instructions}</p>
          </div>
        </>
    );
    }

export default ItemPage;
