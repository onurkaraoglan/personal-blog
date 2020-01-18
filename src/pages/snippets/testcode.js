import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

const TestCode = () => (
  <Layout>
    <SEO title="Test Code" />
    <h1 className="h1">Test Code</h1>
    <div className="body">
        <p>This is my first code snippet for test..</p>
        <pre>
            &lt;div&gt; <br/> 
            &nbsp; &lt;span&gt; <br/> 
            &nbsp; &nbsp; Hello World! <br/>
            &nbsp; &lt;/span&gt; <br/> 
            &lt;/div&gt;
        </pre>
    </div>
  </Layout>
)

export default TestCode
