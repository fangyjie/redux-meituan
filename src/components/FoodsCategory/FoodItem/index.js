import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { setCartList, minusCart } from '../../../store/modules/takeaway'

const Foods = ({
  id,
  picture,
  name,
  unit,
  description,
  food_tag_list,
  month_saled,
  like_ratio_desc,
  price,
  tag,
  count
}) => {
  const { cartList } = useSelector((state) => state.fooder)
  const getNum = () => {
    const item = cartList.find((item) => item.id === id)
    if (item) return item.count
    else return 0
  }
  const dispatch = useDispatch()
  return (
    <dd className="cate-goods">
      <div className="goods-img-wrap">
        <img src={picture} alt="" className="goods-img" />
      </div>
      <div className="goods-info">
        <div className="goods-desc">
          <div className="goods-title">{name}</div>
          <div className="goods-detail">
            <div className="goods-unit">{unit}</div>
            <div className="goods-detail-text">{description}</div>
          </div>
          <div className="goods-tag">{food_tag_list.join(' ')}</div>
          <div className="goods-sales-volume">
            <span className="goods-num">月售{month_saled}</span>
            <span className="goods-num">{like_ratio_desc}</span>
          </div>
        </div>
        <div className="goods-price-count">
          <div className="goods-price">
            <span className="goods-price-unit">¥</span>
            {price}
          </div>
          <div className="goods-count">
            {getNum() > 0 && (
              <span
                className="minus"
                onClick={() => {
                  dispatch(minusCart(id))
                }}
              ></span>
            )}
            {getNum() > 0 && <span className="count">{getNum()}</span>}
            <span
              className="plus"
              onClick={() => {
                dispatch(
                  setCartList({
                    id,
                    picture,
                    name,
                    unit,
                    description,
                    food_tag_list,
                    month_saled,
                    like_ratio_desc,
                    price,
                    tag,
                    count
                  })
                )
              }}
            ></span>
          </div>
        </div>
      </div>
    </dd>
  )
}

export default Foods
