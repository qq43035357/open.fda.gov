import React from 'react'
import marked from 'marked'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import tools from './_apps.yaml'

const aCx: string = 'clr-gray font-size-4 weight-400 t-pad-t-2 t-pad-b-2 block reading-width t-marg-b-2'
const linkCx: string = 'clr-gray b-b-1 marg-b-1'
const disclaimer: string = 'http://www.fda.gov/AboutFDA/AboutThisWebsite/WebsitePolicies/Disclaimers/default.htm'
export default () => (
    <Layout
        crumbs={['openFDA','Community','openFDA Apps']}
        title='openFDA › openFDA Apps'>
        <Hero
            label='Community'
            title='openFDA Apps'
            htmlDescription="true"
            description="Part of openFDA's mission is to make public FDA data quickly and easily accessible for use in applications. Members of the openFDA community have responded to that opportunity by creating new apps that further the reach of the available information and extend the benefits of the openFDA database. <br/> <br/> openFDA developers wishing to see their app appear on this page may send a request to <a href='mail-to:open@fda.hhs.gov' class='clr-white underline'>open@fda.hhs.gov</a>."
        />

        <section className='container clearfix marg-t-3 marg-b-3 relative'>
            <div className="usa-alert usa-alert-info">
                <div className="usa-alert-body">
                    <p className="usa-alert-text">FDA is not responsible for Section 508 compliance (accessibility) on other federal or private websites. See <a href="http://www.hhs.gov/disclaimer.html">HHS’s Website Disclaimer</a></p>
                    <p className="usa-alert-text">FDA is not responsible for the contents of any pages referred from its website. See <a href="http://www.fda.gov/AboutFDA/AboutThisWebsite/WebsitePolicies/#sites">FDA’s Website Policy</a> and the <a href="https://www.whitehouse.gov/sites/default/files/omb/assets/memoranda_2010/m10-23.pdf">2010 Whitehouse Memorandum</a></p>
                </div>
            </div>

            <div className="flex-box dir-row flex-wrap">
                    {
                        tools.map((tool, i) => (
                            <div className="col d-3 b-t-1 grow-none" key={i}>
                                <div className="flex-box">
                                    <h4><a
                                        className={aCx}
                                        href={tool.url}
                                        className='clr-primary-darker'
                                        target="_blank">{tool.title}</a><a href={disclaimer} target="_blank" className="link-external"></a></h4>
                                </div>
                            </div>
                        ))
                    }
            </div>

        </section>
    </Layout>
)
