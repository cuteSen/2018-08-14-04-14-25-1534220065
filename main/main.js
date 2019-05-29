module.exports = function main(number) {
    var line0 = new Array(10);
    line0 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.']
    var line1 = new Array(10)
    line1 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|']
    var line2 = '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'.split('   ')
    var answer = new Array('','','')
    for(var i=0;i<number.length;i++)
    {
        int_number=parseInt(number[i])
        answer[0]+=line0[int_number]+(i==number.length-1?'\n':' ')
        answer[1]+=line1[int_number]+(i==number.length-1?'\n':' ')
        answer[2]+=line2[int_number]+(i==number.length-1?'\n':' ')
    }
    return answer[0]+answer[1]+answer[2];
};