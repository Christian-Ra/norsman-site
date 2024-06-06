import "./ProjectDescription.scss"

export default function ProjectDescription ({title, subHeading}) {

    return (
        <section class="description">
           <div className="container">
            <div className="body-container">

    <h2 class="title">{title}</h2>
    <h2 class="description_subheading">{subHeading}</h2>
    <p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultricies est, eget dignissim arcu elementum sit amet. Nullam non velit et nisi rutrum ullamcorper. Sed vestibulum posuere tellus ac fermentum. Morbi nec risus vitae quam euismod volutpat ac ut purus. Ut faucibus felis et massa consectetur viverra. Donec sed arcu libero.</p>
    <p class="body-text">Vestibulum pharetra urna sed sapien consectetur, vel placerat ligula dapibus. Duis et eros nec libero bibendum viverra. Integer tincidunt interdum arcu, at sollicitudin lacus molestie a. Aliquam erat volutpat. Sed non massa eu dui auctor lacinia vitae vel odio. Nulla facilisi.</p>
    <p class="body-text">Praesent id dolor non nunc convallis ultrices sit amet nec eros. Suspendisse sit amet tempor orci, vel dapibus sapien. Aliquam erat volutpat. Nullam tincidunt mauris id sapien efficitur, nec molestie orci elementum. Fusce non nulla metus.</p>
            </div>
            </div> 
</section>

    )
}