在理想运放的一个输入端串入两个压控电压源（VCVS），与 $V_{OS}$ 和 $v_1/\mathrm{CMRR}$ 受控源放在一起：一个值为 $v_{dd}/\mathrm{PSRR}^+$，另一个值为 $v_{ss}/\mathrm{PSRR}^-$，其中 $v_{dd}$ 和 $v_{ss}$ 分别为 $V_{DD}$ 和 $V_{SS}$ 的小信号变化量。

- 信号输入端接地时，电源变化 $v_{dd}$ 产生 $v_{out} = A_v v_{dd}/\mathrm{PSRR}^+$，即 $v_{out}/v_{dd} = A_v/\mathrm{PSRR}^+ = A_{dd}$，这正是定义 $\mathrm{PSRR}^+ = A_v/A_{dd}$ 所隐含的电源增益；$v_{ss}$ 同理。
- 这些受控源与 $V_{OS}$ 和 CMRR 受控源一样是折算到输入端的；其极性由电源增益的符号决定，若要描述频率相关特性，则改为 $v_{dd}/\mathrm{PSRR}^+(s)$ 和 $v_{ss}/\mathrm{PSRR}^-(s)$。
- 计入所有效应时（小信号，叠加原理）：$v_{out} \approx A_v\left[v_1 - v_2 + \dfrac{v_1}{\mathrm{CMRR}} + V_{OS} + \dfrac{v_{dd}}{\mathrm{PSRR}^+} + \dfrac{v_{ss}}{\mathrm{PSRR}^-}\right]$。

（等价地，也可以在输出端加入受控源 $A_{dd}v_{dd}$ 和 $A_{ss}v_{ss}$，但折算到输入端的形式更符合图中的模型。）
