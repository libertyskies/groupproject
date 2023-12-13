import React from "react";
import questions from "../faq.json";
import Banner from "../components/Banner";


function FAQ(){
  return (
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <h4>
        Question not on the list? Contact us at kittenhelp.org.uk
      </h4>
    </Banner>
  );
}
export default FAQ;