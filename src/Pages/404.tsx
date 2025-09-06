import './Page.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Page404() {
    return (
      <div className="not-found">
        <Header/>
            <div className="container">
                <div className='content-card'>
                    <h1>404 - Page Not found</h1>
                    <p>ページが見つかりませんでした。</p>
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

export default Page404;

