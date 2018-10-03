import React from 'react';

const CuratedCollection = ({carousal}) => (
<div className='curated__collection'>
<h2 className='cat__ttl-section'>CURATED COLLECTIONS</h2>
<p className='cat__subheading-section'>Carefully curated,just for you</p>
{ carousal.references1.forEach(element =>(<h4>element.title</h4>)) }
</div>
)

export default CuratedCollection;