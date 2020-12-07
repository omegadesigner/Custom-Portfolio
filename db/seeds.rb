# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Admin.destroy_all
Project.destroy_all
Skill.destroy_all
Message.destroy_all

@admin = Admin.create!(
    username: 'admin', 
    password: 'portfolioadmin',
    full_name: 'User Full Name',
    email: 'useremail@email.com',
    linkedin: 'https://linkedin.com/username',
    phone: '555-555-5555'
)

@skill1 = Skill.create!(name: 'Amazon Web Services', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/amazonwebservices.png', display: true)
@skill2 = Skill.create!(name: 'Android', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/android.png', display: true)
@skill3 = Skill.create!(name: 'Angular JS', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/angularjs.png', display: true)
@skill4 = Skill.create!(name: 'Apple', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/apple.png', display: true)
@skill5 = Skill.create!(name: 'Back Bone JS', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/backbonejs.png', display: true)
@skill6 = Skill.create!(name: 'Bootstrap', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/bootstrap.png', display: true)
@skill7 = Skill.create!(name: 'C', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/c.png', display: true)
@skill8 = Skill.create!(name: 'Coffee Script', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/coffeescript.png', display: true)
@skill9 = Skill.create!(name: 'C++', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/cplusplus.png', display: true)
@skill10 = Skill.create!(name: 'C#', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/csharp.png', display: true)
@skill11 = Skill.create!(name: 'CSS 3', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/css3.png', display: true)
@skill12 = Skill.create!(name: 'Express', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/express.png', display: true)
@skill13 = Skill.create!(name: 'Firefox', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/firefox.png', display: true)
@skill14 = Skill.create!(name: 'Git', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/git.png', display: true)
@skill15 = Skill.create!(name: 'Github', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/github.png', display: true)
@skill16 = Skill.create!(name: 'Heroku', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/heroku.png', display: true)
@skill17 = Skill.create!(name: 'HTML 5', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/html.png', display: true)
@skill18 = Skill.create!(name: 'Adobe Illustrator', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/illustrator.png', display: true)
@skill19 = Skill.create!(name: 'Java', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/java.png', display: true)
@skill20 = Skill.create!(name: 'Javascript', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/javascript.png', display: true)
@skill21 = Skill.create!(name: 'JQuery', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/jquery.png', display: true)
@skill22 = Skill.create!(name: 'Linux', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/linux.png', display: true)
@skill23 = Skill.create!(name: 'Microsoft .Net', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/microsoft-dot-net.png', display: true)
@skill24 = Skill.create!(name: 'Mocha', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/mocha.png', display: true)
@skill25 = Skill.create!(name: 'Mongo DB', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/mongodb.png', display: true)
@skill26 = Skill.create!(name: 'Mysql', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/mysql.png', display: true)
@skill27 = Skill.create!(name: 'Node JS', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/node-js.png', display: true)
@skill28 = Skill.create!(name: 'NPM', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/npm.png', display: true)
@skill29 = Skill.create!(name: 'Oracle', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/oracle.png', display: true)
@skill30 = Skill.create!(name: 'Adobe Photoshop', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/photoshop.png', display: true)
@skill31 = Skill.create!(name: 'PHP', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/php.png', display: true)
@skill32 = Skill.create!(name: 'Postgresql', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/postgresql.png', display: true)
@skill33 = Skill.create!(name: 'Python', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/python.png', display: true)
@skill34 = Skill.create!(name: 'Rails', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/rails.png', display: true)
@skill35 = Skill.create!(name: 'React', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/react.png', display: true)
@skill36 = Skill.create!(name: 'Red Hat', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/redhat.png', display: true)
@skill37 = Skill.create!(name: 'Ruby', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/ruby.png', display: true)
@skill38 = Skill.create!(name: 'Slack', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/slack-logo.png', display: true)
@skill39 = Skill.create!(name: 'Sourcetree', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/sourcetree.png', display: true)
@skill40 = Skill.create!(name: 'Stack Overflow', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/stackoverflow.png', display: true)
@skill41 = Skill.create!(name: 'Trello', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/trello.png', display: true)
@skill42 = Skill.create!(name: 'Ubuntu', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/ubuntu.png', display: true)
@skill43 = Skill.create!(name: 'Unity', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/unity.png', display: true)
@skill44 = Skill.create!(name: 'Valve', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/valve.png', display: true)
@skill45 = Skill.create!(name: 'Visual Studio', thumbnail_url: 'https://raw.githubusercontent.com/omegadesigner/Custom-Portfolio/dev/client/src/icons/visualstudio.png', display: true)

@project1 = Project.create!(
    name: 'Example Project 1',
    thumbnail_url: 'https://cdn.pixabay.com/photo/2014/11/24/18/50/mind-544404__340.png',
    github_url: 'https://github.com/username',
    deployment_url: 'https://username-project.netlify.com',
    short_description: 'An example project with a short description for the card.',
    long_description: 'A much longer and in-depth description of the project. Usually containing a desrciption of tecnologies used and the time spent on the different stages of development.'
)
    
@project2 = Project.create!(
    name: 'Example Project 2',
    thumbnail_url: 'https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962__340.png',
    github_url: 'https://github.com/username',
    deployment_url: 'https://username-project.netlify.com',
    short_description: 'An example project with a short description for the card.',
    long_description: 'A much longer and in-depth description of the project. Usually containing a desrciption of tecnologies used and the time spent on the different stages of development.'
)
        
@project3 = Project.create!(
    name: 'Example Project 3',
    thumbnail_url: 'https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895__340.png',
    github_url: 'https://github.com/username',
    deployment_url: 'https://username-project.netlify.com',
    short_description: 'An example project with a short description for the card.',
    long_description: 'A much longer and in-depth description of the project. Usually containing a desrciption of tecnologies used and the time spent on the different stages of development.'
)
    
@message1 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

@message2 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

@message3 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

@message4 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

@message5 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

@message6 = Message.create!(
    contact_name: "Potential Client",
    contact_email: "client@email.com",
    contact_phone: "555-555-5555",
    message: "A message entered by someone browsing this portfolio who is attempting to contact the user."
)

puts "#{Admin.count} admin created"
puts "#{Skill.count} skills created"
puts "#{Project.count} projects created"
puts "#{Message.count} messages created"