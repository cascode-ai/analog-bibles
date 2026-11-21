# 详细步骤 - A244

PSRR 比较的是从信号输入端到输出的增益与从电源到输出的增益。与失调源和 CMRR 源一样，电源的影响可以用一个折算到输入端的电压源表示，其值乘以开环增益即得到观测到的输出对电源的响应。由定义求出所需的值并加以验证。

### 第 1 步 — 由定义得到的电源增益

设 $A_{dd}=v_o/v_{dd}$（信号输入接地）为正电源到输出的小信号增益。定义为

$$
\mathrm{PSRR}^+=\frac{v_o/v_{in}\ (v_{dd}=0)}{v_o/v_{dd}\ (v_{in}=0)}=\frac{A_v}{A_{dd}}
\quad\Rightarrow\quad A_{dd}=\frac{A_v}{\mathrm{PSRR}^+},
$$

负电源同理，$A_{ss}=A_v/\mathrm{PSRR}^-$。

### 第 2 步 — 折算到输入端的电源源

在理想运放的一个输入端串入两个压控电压源，与 $V_{OS}$ 和 $v_1/\mathrm{CMRR}$ 源相邻：

$$
\frac{v_{dd}}{\mathrm{PSRR}^+}\qquad\text{and}\qquad\frac{v_{ss}}{\mathrm{PSRR}^-},
$$

其中 $v_{dd}$、$v_{ss}$ 为 $V_{DD}$、$V_{SS}$ 的小信号变化量。其极性由相应电源增益的符号决定；若抑制能力随频率变化，则改为 $v_{dd}/\mathrm{PSRR}^+(s)$ 和 $v_{ss}/\mathrm{PSRR}^-(s)$。

### 第 3 步 — 与定义核对

信号输入接地、只有 $v_{dd}$ 时，理想运放看到的差分输入为 $v_{dd}/\mathrm{PSRR}^+$，故

$$
v_o=A_v\frac{v_{dd}}{\mathrm{PSRR}^+}\quad\Rightarrow\quad \frac{v_o}{v_{dd}}=\frac{A_v}{\mathrm{PSRR}^+}=A_{dd},
$$

正是第 1 步的电源增益。$v_{ss}$ 与 $\mathrm{PSRR}^-$ 同理。

### 第 4 步 — 完整的小信号模型

由叠加原理，计入所有折算到输入端的源，

$$
v_{out}\approx A_v\Big[v_1-v_2+\frac{v_1}{\mathrm{CMRR}}+V_{OS}+\frac{v_{dd}}{\mathrm{PSRR}^+}+\frac{v_{ss}}{\mathrm{PSRR}^-}\Big].
$$

等价地，也可在输出端加入源 $A_{dd}v_{dd}$ 和 $A_{ss}v_{ss}$，但折算到输入端的形式与图中模型的结构一致。
