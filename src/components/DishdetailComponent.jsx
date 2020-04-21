import React, { Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Media } from 'reactstrap';

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }


  renderDish(dish) {
    if (dish != null){
      return(
        <Card>
         <CardImg top src={dish.image} alt={dish.name} />
         <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
      );}
    else{
        return(
            <div></div>
        );}
}


  rendeComments(comments) {
    if (comments != null){
      return(
          <ul type='none'>{
            comments.map((comment) => {
              return (
                <li key={comment.id} >
                  <p>{comment.comment}</p>
                  <p>--{comment.author}, {comment.date}</p>
                </li>
              )
          })
            }</ul>);
    }
    else{
        return(
            <div></div>
        );}
}

  render() {
    if (this.props.selectedDish != null){
        var dish = this.props.selectedDish;
        var comments = this.props.selectedDish.comments;
        return(
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
                {this.rendeComments(comments)}
            </div>
            </div>
        );
    }
    else{
            return(
                <div></div>
            );
        }
            
  }
}

export default DishdetailComponent;
