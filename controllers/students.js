const listStudent = [
    {
        id: 1,
        name: 'Nobita',
        age: 5
    },
    {
        id: 2,
        name: 'Doraemon',
        age: 5
    },
    {
        id: 3,
        name: 'Jaien',
        age: 2
    }
]
const studentsController = {
    get: (req, res) => {
        const { age } = req.query;
        if (age) {
            const students = listStudent.filter(item => item.age === Number(age));
            res.send({
                data: students,
                message: students.length > 0 ? 'Thành công!' : 'Không có dữ liệu thỏa mãn!',
            })
        } else {
            res.send(listStudent);
        }
    },
    insert: (req, res) => {
        try {
            const options = req.query;
            console.log(options);
            if (options.q) {
                if (options.q === 'ONE') listStudent.push(req.body);
                else if (options.q === 'MANY') {
                    if (!Array.isArray(req.body)) throw new Error('Bạn cần truyền 1 mảng học sinh với options MANY!');
                    listStudent.push(...req.body);
                    res.status(201).send({
                        message: 'Thành công!',
                        listStudent
                    })
                }
            } else {
                if (!req.body.id) throw new Error('Id là bắt buộc!');
                res.status(201).send({
                    message: 'Thành công!',
                    listStudent
                })
            }
            /**
             * hoàn thành nốt trường hợp ONE của post
             * viết API cho 2 phương thức delete, put
             * put: + cập nhật 1
             *      + cập nhật nhiều (khoảng từ đầu tới đâu là phải cập nhật, cập những những student có những id..., cập nhật tất cả)
             * delete: tương tự put
             * 
             * 
             */
        } catch (error) {
            res.send({
                messsage: 'Thất bại!',
                error: error.message
            });
        }
    },
}
export default studentsController;