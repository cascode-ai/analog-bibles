当串联电流源可正常吸收 $I_1>0$ 且体结电流可忽略时，源节点 KCL 强制给出

$$I_X=I_1,\qquad V_X(t)=3\,\mathrm V-\frac{I_1}{C_1}t.$$

$M_1$ 进入线性区本身不会改变斜坡斜率；源极电压会自行调整以维持 $I_1$。取 $\lambda=0$、$\beta=\mu_nC_{ox}W/L$，若初始偏置可行且处于饱和区，

$$V_S+V_{TH}(V_S)=V_b-\sqrt{2I_1/\beta},\qquad V_X\ge V_b-V_{TH}(V_S).$$

若明确采用常阈值近似，转区电压为 $V_X=V_b-V_{TH}$；更高栅压可能使器件从初始即在线性区。题中未给体效应、电流源工作范围及结参数，故不能统一指定 0 V 或 −0.7 V 终值，也不能确定晚期 $I_X$。图示常阈值例子保守地止于 $V_S=0$，这不是预言的物理停止点。

![答案曲线：voltage](/q/R026/solution-voltage.zh.svg)

![答案曲线：current](/q/R026/solution-current.zh.svg)
