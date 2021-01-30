
/*  
   一: 环境安装:     
        1. 安装ts:   npm install typescript -g 
        2. 安装ts-node : npm install ts-node -g
    二: ts编译: $ tsc Demo1.ts
        该步骤回生成 Demo1.js 生成的Demo1.js 可以直接通过node.js运行
        而Demo.ts  不能通过node运行, 但是可以通过ts-node 运行
*/

function jason() {
    let web: string = 'jason';
    console.log(web);
}
jason();