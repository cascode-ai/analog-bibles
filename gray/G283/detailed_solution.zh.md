# 详细步骤 - G283

取运放受控源 $a_v(v_+-v_-)$ 为参考受控源。增益由 $\mathcal R$、$A_\infty$ 和 $d$ 求出；各端口电阻由布莱克曼公式 $R_{port}=R_{port}(a_v{=}0)\,(1+\mathcal R_{sc})/(1+\mathcal R_{oc})$ 求出，其中 $\mathcal R_{sc}$ 和 $\mathcal R_{oc}$ 分别是该端口短路和开路时的回归比。整个过程不涉及二端口近似，因此对本模型结果是精确的。

### 第 1 步 — 回归比 $\mathcal R$

令 $v_i=0$，同相输入端接地，$R_i$ 即从反相输入端 $v_-$ 接到地，与 $R_1$ 并联：
$$
R_1\|R_i=1\ \mathrm{k\Omega}\|1\ \mathrm{M\Omega}=999.0\ \Omega .
$$
用测试电压 $v_t$ 代替受控源。它经串联的 $R_o$ 和 $R_2$ 驱动 $R_1\|R_i$，构成分压器：
$$
v_-=v_t\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=v_t\frac{999.0\ \Omega}{6099\ \Omega}=0.16380\,v_t .
$$
控制电压为 $v_x=v_+-v_-=-v_-$，因此返回信号 $v_r=a_vv_x=-a_v(0.16380)v_t$，于是
$$
\mathcal R=-\frac{v_r}{v_t}=a_v\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=10^4\times0.16380=1638 .
$$

### 第 2 步 — $A_\infty$、$d$ 与闭环增益

$a_v\to\infty$ 时，环路迫使 $v_x\to0$，故 $v_-=v_i$，$R_i$ 中无电流；分压器给出 $v_o=v_i(R_1+R_2)/R_1$：
$$
A_\infty=1+\frac{R_2}{R_1}=6 .
$$
$a_v=0$ 时，运放输出端仅为 $R_o$ 接地。输入经 $R_i$ 到达 $v_-$ 处的 $R_1\|(R_2+R_o)=836.1\ \Omega$，而 $v_o$ 等于 $v_-$ 乘以分压比 $R_o/(R_o+R_2)$：
$$
d=\frac{836.1\ \Omega}{1\ \mathrm{M\Omega}+836.1\ \Omega}\cdot\frac{100\ \Omega}{5.1\ \mathrm{k\Omega}}=1.64\times10^{-5}.
$$
于是
$$
\frac{v_o}{v_i}=A_\infty\frac{\mathcal R}{1+\mathcal R}+\frac{d}{1+\mathcal R}=6\times\frac{1638}{1639}+\frac{1.64\times10^{-5}}{1639}=5.9963 ,
$$
其中馈通项（$10^{-8}$）可以忽略。

### 第 3 步 — 输入电阻

- $a_v=0$ 时，输入源看到 $R_i$ 与 $v_-$ 处的网络串联：$R_{in}(a_v{=}0)=R_i+R_1\|(R_2+R_o)=1.00084\ \mathrm{M\Omega}$。
- 输入端口短路（$v_+$ 接地）：即第 1 步的电路，$\mathcal R_{sc}=1638$。
- 输入端口开路：$R_i$ 中无电流，无论 $v_t$ 为何值都有 $v_x=0$，故 $\mathcal R_{oc}=0$。

$$
R_{in}=R_{in}(a_v{=}0)(1+\mathcal R)=(1.00084\ \mathrm{M\Omega})(1639)=1.64\ \mathrm{G\Omega}.
$$

### 第 4 步 — 输出电阻

- $a_v=0$ 且 $v_i=0$ 时，输出节点看到 $R_o$ 接地，并联上 $R_2$ 与 $R_1\|R_i$ 的串联：$R_{out}(a_v{=}0)=R_o\|(R_2+R_1\|R_i)=100\ \Omega\|5999\ \Omega=98.36\ \Omega$。
- 输出短路：$v_o=0$ 迫使 $v_-=0$、$v_x=0$，故 $\mathcal R_{sc}=0$。
- 输出开路：即第 1 步的正常电路，$\mathcal R_{oc}=1638$。

$$
R_{out}=\frac{R_{out}(a_v{=}0)}{1+\mathcal R}=\frac{98.36\ \Omega}{1639}=0.060\ \Omega .
$$

结果：$\mathcal R\approx1638$，$v_o/v_i\approx5.996$，$R_{in}\approx1.64\ \mathrm{G\Omega}$，$R_{out}\approx0.060\ \Omega$，与直接对电路做节点分析（nodal analysis）的结果完全一致。
