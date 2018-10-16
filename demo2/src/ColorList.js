import React, { Component } from 'react';

class ColorList extends Component {
    render() {
        const { colors, removeColorHandler, addColorHandler, rateColorHandler} = this.props;
        return (
            <div>
                {
                (colors.length === 0) ? 
                    <p>没有颜色</p> :
                    colors.map(color => 
                    <section key={color.id}>
                        <h1 style={{color: color.color}}>{color.title}</h1>
                        <div>{color.rating}</div>
                        <button onClick={() => removeColorHandler(color.id)}>删除颜色{color.title}</button>
                        <button onClick={() => rateColorHandler(color.id)}>给{color.title}5星好评</button>
                    </section>
                    )
                }
                <button onClick={addColorHandler}>添加颜色</button>
                
            </div>
        );
    }
}
export default ColorList;