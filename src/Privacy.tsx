import './Page.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Privacy() {
  return (
    <div className="not-home">
      <Header/>
      <div className="container">
        <div className="content-card">
          <h1>プライバシーポリシー</h1>
          <p>当サイト（以下、「本サイト」）では、利用者のプライバシーを尊重し、個人情報の保護に努めます。</p>

          <h2>1. 個人情報の収集について</h2>
          <p>本サイトでは、利用者の個人情報を収集することはありません。</p>

          <h2>2. 個人情報の利用について</h2>
          <p>本サイトでは、利用者の個人情報を利用することはありません。</p>

          <h2>3. 個人情報の第三者提供について</h2>
          <p>本サイトでは、利用者の個人情報を第三者に提供することはありません。</p>

          <h2>4. 免責事項</h2>
          <h3>掲載リンク</h3>
          <p>本サイトからリンク等を通じて外部サイトに移動した場合、移動先サイトにて提供される情報やサービスなどについては責任を負いかねます。</p>
          <h3>サイトに掲載するツール</h3>
          <p>本サイトに掲載されている(または掲載される予定のある)プログラム類は動作検証を行っていますが、ご利用中にトラブルが発生した際の責任は負いかねます。</p>

          <h2>5. プライバシーポリシーの変更</h2>
          <p>本ポリシーの内容は、必要に応じて変更される場合があります。変更後の内容は、本サイトに掲載された時点で効力を生じるものとします。 </p>

          <div className='privacy-link'>
            <a href="/" className="link">ホームに戻る</a>
          </div>
        </div>
      </div>
      <Footer/>
      <div className='background'></div>
    </div>
  );
}

export default Privacy;
