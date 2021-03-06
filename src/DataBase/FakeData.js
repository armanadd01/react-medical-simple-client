const fakeData = {
    departments: [
        {
            key: 'arudb001',
            name: 'Lab Test Department.',
            short: "Laboratory Medicine Department of United Hospital has become the leading diagnostic laboratory in Bangladesh",
            description: "Laboratory Medicine Department of United Hospital has become the leading diagnostic laboratory in Bangladesh by virtue of its uniqueness in offering diverse tests, reliability and prompt turn around time. We provide state-of-the-art reliable diagnostic services 24 hours a day, 7 days a week, for patients, general practitioners and other hospitals in the country. A medical diagnostic laboratory is more than the backbone of a treating physician; it is the very soul of diagnosis.",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-1.jpg'
        },
        {
            key: 'arudb002',
            name: 'Cardiology Department.',
            short: "Cardiac Anesthesia is a subspecialty anesthesiology devoted to the preoperative, intraoperative",
            description: "Cardiac Anesthesia is a subspecialty anesthesiology devoted to the preoperative, intraoperative, and postoperative care of adult patients undergoing cardiac surgery and related invasive procedures. It deals with the anesthesia aspects of care related to surgical cases such as, but not limited to, open heart surgery, lung surgery, and other operations of the human chest. These aspects include perioperative care with expert manipulation of patient cardiopulmonary physiology through precise and advanced application of pharmacology, resuscitative techniques, critical care medicine, and invasive procedures. This also includes management of the cardiopulmonary bypass (heart-lung) machine, which most cardiac procedures require intraoperatively while the heart undergoes surgical correction",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-5.jpg'
        },
        {
            key: 'arudb003',
            name: 'Neurology Department.',
            short: "The Neurology deparment at the state of the art United Hospital serves as the receiving point",
            description: "The Neurology deparment at the state of the art United Hospital serves as the receiving point for the most seriously injured people from across the country and treats patients with brain and spine diseases from home and abroad.In addition to being a centre of excellence, the Neurology deparment aims to be an asset to national and international communities. Our physicians are experts in Neuroscience which is the scientific study of the nervous system.",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-6.jpg'
        },
        {
            key: 'arudb004',
            name: 'Dental Department.',
            short: "A comprehensive Dental Centre became operational at United Hospital on 29th April 2012. The Dental Centre",
            description: "A comprehensive Dental Centre became operational at United Hospital on 29th April 2012. The Dental Centre has been set up with the aim to provide an international standard dental treatment facility to satisfy and meet the demands of our community.Our dentists Dr Md. Nazrul Islam and Dr Lutfun Nahar both completed their Masters from National University of Singapore and have a 5-years working experience in Singapore.",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/index-1.html'
        },
        {
            key: 'arudb005',
            name: 'Orthopedic Department.',
            short: "The Department of Orthopaedics has two full-time Consultants, Two part-time Consultant, a number of junior doctors,",
            description: "United Hospital Limited has one of best the orthopaedic department in the country, serving to provide 360?? care as a Bone & Joint Centre. The Department of Orthopaedics has two full-time Consultants, Two part-time Consultant, a number of junior doctors, and supporting paramedical staff trained to deliver a 100% success rate. Our team diagnoses, operates and treats problems affecting the bones, joints and muscles of patients encompassing all age groups.The Department of Orthopaedics offers out-patient consultation services and procedures. It is well supported by fully equipped operation theatre (OT), intensive care units for pre- and post- operative care, as well as rehabilitation services in Physiotherapy Department. The state-of-the-art OT is equipped all updated facilities. The hospital is also equipped with CT scan (500 slice), MRI Scan (1.5 tesla), and Digital X-ray for prompt screening facilities.",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-7.jpg'
        },
        {
            key: 'arudb006',
            name: 'Emergency Department.',
            short: "United Hospital Limited has one of best the orthopaedic department in the country, serving to provide 360?? care",
            description: "United Hospital Limited has one of best the orthopaedic department in the country, serving to provide 360?? care as a Bone & Joint Centre. The Department of Orthopaedics has two full-time Consultants, Two part-time Consultant, a number of junior doctors, and supporting paramedical staff trained to deliver a 100% success rate. Our team diagnoses, operates and treats problems affecting the bones, joints and muscles of patients encompassing all age groups.The Department of Orthopaedics offers out-patient consultation services and procedures. It is well supported by fully equipped operation theatre (OT), intensive care units for pre- and post- operative care, as well as rehabilitation services in Physiotherapy Department. The state-of-the-art OT is equipped all updated facilities. The hospital is also equipped with CT scan (500 slice), MRI Scan (1.5 tesla), and Digital X-ray for prompt screening facilities. ",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/featured-image-10.jpg'
        },
    ],
    doctors: [
        {
            key: 'arudb001',
            name: 'Timothy Newman',
            specialty: 'Cardiologist & Surgeon',
            details: "He finds that it is due to his avoidance, that some of them have never had a great need of him, they do not know the discomfort of the choices, they fail to encounter the enduring consequences, and he is looking for the inventor from time to time. But I don't know just how. Graduate School of Biomedical Sciences University of Texas Health Science Center at San Antonio.",
            experience: "15 years of Experience in Medicine",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/team-1.jpg'
        },
        {
            key: 'arudb002',
            name: 'Jeffrey Morgan',
            specialty: 'Gynecologist & Surgeon',
            experience: "15 years of Experience in Medicine",
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/team-2.jpg'
        },
        {
            key: 'arudb003',
            name: 'Lori Robertson',
            details: "He finds that it is due to his avoidance, that some of them have never had a great need of him, they do not know the discomfort of the choices, they fail to encounter the enduring consequences, and he is looking for the inventor from time to time. But I don't know just how. Graduate School of Biomedical Sciences University of Texas Health Science Center at San Antonio.",
            experience: "15 years of Experience in Medicine",
            specialty: 'Dentist',
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/team-3.jpg'
        },
        {
            key: 'arudb004',
            name: 'Brandon Fowler',
            details: "He finds that it is due to his avoidance, that some of them have never had a great need of him, they do not know the discomfort of the choices, they fail to encounter the enduring consequences, and he is looking for the inventor from time to time. But I don't know just how. Graduate School of Biomedical Sciences University of Texas Health Science Center at San Antonio.",
            experience: "15 years of Experience in Medicine",
            specialty: 'Neurologist & Surgeon',
            img: 'http://hasan.themexlab.com/new/hope-medical/hope-medical/images/resource/team-4.jpg'
        },
    ]
}