import React, { Component } from 'react'
import { useState } from 'react';

const captilaize=(word)=>
{
  const lower=word.toLowerCase();
  return lower.charAt(0).toUpperCase()+lower.slice(1);
}
export default function Alert(prop) {
  return (
   prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert" dir="ltr">
     <strong>{captilaize(prop.alert.type)}</strong>: {captilaize(prop.alert.msg)}
  
</div>
  )
}
