import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'id' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      {language === 'id' ? (
        <div className="introduction indonesian">
          <p className="title">
            Halo.
            <br />
            <ReactRotatingText items={bio.description} />
            <br />
            {bio.role} <strong>{name}</strong>Bima Setyo.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      {/* <div className="thumbnail-wrapper">
        <Image style={{ width: 250, height: 250 }} src={bio.thumbnail} alt="thumbnail" />
      </div> */}
    </div>
  );
}

export default Bio;
