import { useNavigate, useParams, Link } from 'react-router-dom';
import data from '../data';

function ItemPage() {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const item = data.find((item) => item.id === parseInt(id)); // data에서 해당 아이템 찾기
  let navigate = useNavigate();
  // 아이템이 존재하지 않는 경우 404 메시지 표시
    if (!item) return <div>404: Item Not Found</div>;

    return (
        <>
          <div className='item-page-container'>
            <div className='item-page-img'>
            <img src={item.image} width="270px" height="270px" className='item-page-img-detail'/>
            <h5 className='item-page-img-inst'>{item['img-inst']}</h5>
            </div>
            <div className='item-page-info'>
              <div className='item-page-title'>
                <h2 className='item-page-title'># {item.name}</h2>
              </div>
              <div>
                <h3 className='item-page-inst1'>분리배출 방법</h3>
                <p className='item-page-inst2'>{item.instructions}</p>
              </div>
            </div>

          </div>

          <h3 className='item-page-more'>더보기</h3>
            <div  className='item-page-more-container'>
              {/* <div className='item-page-img'>
              <img src={item.image} width="100px" height="100px" className='item-page-img-detail'/>
              </div> */}
              {
                data
                  .filter((otherItem) => otherItem.id >= 0 && otherItem.id <= 15 && otherItem.image !== item.image)
                  .reduce((uniqueItems, otherItem) => {
                    if (!uniqueItems.find((item) => item.id === otherItem.id || item.image === otherItem.image)) {
                      uniqueItems.push(otherItem); // 아이디와 이미지 경로가 겹치지 않는 경우에만 배열에 추가
                    }
                    return uniqueItems;
                  }, [])
                  .sort(() => Math.random() - 0.5)
                  .map((otherItem) => (
                    <div className='item-page-detail-img' key={otherItem.id}>
                        <Link to={`/item/${otherItem.id}`}> {/* Link 컴포넌트를 사용해 해당 아이템의 페이지로 이동 */}
                          <img src={otherItem.image} width="190px" height="190px" className='item-page-img-more'/>
                        </Link>
                    </div>
                  ))
              }
            </div>
        </>
    );
    }

export default ItemPage;
