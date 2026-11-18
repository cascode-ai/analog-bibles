[图 1] 是前馈补偿（feedforward compensation）级的小信号模型：增益为 $-A$ 的反相缓冲器（理想：输入阻抗无穷大，输出阻抗为零）经电容 $C_c$ 驱动输出端，第二级则用跨导 $g_{mII}V_i$（如图所示，电流由输出节点流向地）建模，其负载为 $R_{II}$ 和 $C_{II}$。推导电压传输函数 $V_{out}(s)/V_i(s)$，并证明它可以写成

$\dfrac{V_{out}(s)}{V_i(s)} = \dfrac{-AC_c}{C_c + C_{II}}\left(\dfrac{s + g_{mII}/AC_c}{s + 1/[R_{II}(C_c + C_{II})]}\right)$。

零点和极点分别位于何处？
