import './Products.css';

function Products() {
  return (
    <section id="mayo" className="product-detail">
      <div className="product-detail-image">
        <img src="/images/mayo1.jpg" alt="マヨネーズ"/>
      </div>
      <header className="product-detail-header">
        <h2 className="product-detail-title">マヨネーズ</h2>
        <p className="product-price product-detail-price">¥3,800</p>
        <p className="product-detail-lead">ひと塗りすれば、料理になる。</p>
      </header>
      <div className="product-detail-information">
        <div className="product-detail-information-image">
          <img src="/images/mayo2.jpg" alt=""/>
        </div>
        <div className="product-detail-information-text">
          <p>従来の観点を捨て、“美味しい”だけを追求したマヨネーズ。<br/>
            賞味期限や価格といった制約条件を取り払い、レストランクオリティの手作りマヨネーズを目指しました。</p>
        </div>
      </div>
      <div className="product-detail-information">
        <div className="product-detail-information-image">
          <img src="/images/mayo3.jpg" alt=""/>
        </div>
        <div className="product-detail-information-text">
          <p>口にした瞬間マヨネーズとは思えないなんとも言えない透明感が広がり、“食材とディップする”という関係性でなく、“ひと塗りで料理”になります。</p>
        </div>
      </div>
      <div className="product-detail-ingredients">
        <div className="product-detail-ingredients-image">
          <img src="/images/mayo-chart.webp" alt=""/>
        </div>
        <div className="product-detail-ingredients-text">
          <h3>商品情報</h3>
          <ul>
            <li>品目 : マヨネーズ</li>
            <li>内容量 : 瓶(120g)</li>
            <li>原材料 : 食用植物油脂(国内生産)、卵黄、醸造酢、砂糖類(砂糖、水あめ)、マスタード、食塩、(一部卵を含む)</li>
            <li>成分表記 : 100gあたり熱量674kcal/蛋白質1.3g/脂質74.2g/炭水化物5.0g/食塩相当量1.3g(推定値)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Products;
