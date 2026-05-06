const  PDFMerger = require('pdf-merger-js').default;

const mergepdfs = async (p1,p2) => {
    const merger = new PDFMerger();
    await merger.add(p1); 
    await merger.add(p2); 

    // Set metadata
    await merger.setMetadata({
        producer: "pdf-merger-js based script",
        author: "T Naresh",
        creator: "T Naresh",
        title: "Pdf-Merger"
    });


    let d= new Date().getTime();
    await merger.save(`./public/${d}.pdf`);
    return d;
}

module.exports={mergepdfs};
