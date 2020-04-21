import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

  function RenderDish({dish}) {
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


function RenderComments({comments}) {
    if (comments != null){
      return(
          <ul type='none'>{
            comments.map((comment) => {
              return (
                <li key={comment.id} >
                  <p>{comment.comment}</p>
                  <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

  const DishdetailComponent = (props)=>{
    if (props.dish != null){
        var dish = props.dish;
        var comments =props.dish.comments;
        return(
          <div className="container">
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
            <RenderDish dish={dish}/>
            </div>
            <div  className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
                <RenderComments comments={comments}/>
            </div>
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


export default DishdetailComponent;
