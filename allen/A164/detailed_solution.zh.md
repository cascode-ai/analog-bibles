# 详细步骤 - A164

当大输入把全部尾电流导向一个晶体管时发生压摆。此时 $v_{OUT}$ 的变化率等于流过浮置电容 $C_L$ 的电流除以 $C_L$；对每种负载，在两个漏极 D1、D2 列基尔霍夫电流定律（KCL）方程求出该电流。取使 M2 截止的输入阶跃，于是 M1 流过 $I_{SS}$；相反的阶跃给出大小相同、符号相反的速率。

### 第 1 步 — 电流源负载

设 $i_C=C_L\,dv_{OUT}/dt$ 为经 $C_L$ 从 D1 流向 D2 的电流（$v_{OUT}=v_{D1}-v_{D2}$）。M2 截止时，在两个漏极列 KCL：

$$
\text{D1: }\ 0.5I_{SS}=I_{SS}+i_C,\qquad
\text{D2: }\ 0.5I_{SS}+i_C=0 .
$$

两式都给出 $i_C=-0.5I_{SS}$：节点 D1 必须向 M1 提供 $I_{SS}$，而其电流源只提供 $0.5I_{SS}$，因此另外的 $0.5I_{SS}$ 经 $C_L$ 来自 D2，而该节点处的 0.5$I_{SS}$ 电流源没有其他去处。电流恒定，因此输出是线性斜坡：

$$
SR=\left|\frac{dv_{OUT}}{dt}\right|=\frac{|i_C|}{C_L}=\frac{I_{SS}}{2C_L}.
$$

### 第 2 步 — 电阻负载：微分方程

从各漏极到 $V_{DD}$ 接电阻 $R_L$ 时，负载电流取决于漏极电压。M2 截止时，

$$
\text{D1: }\ \frac{V_{DD}-v_{D1}}{R_L}=I_{SS}+i_C,\qquad
\text{D2: }\ \frac{V_{DD}-v_{D2}}{R_L}+i_C=0 .
$$

两式相减消去 $V_{DD}$：

$$
-\frac{v_{OUT}}{R_L}=I_{SS}+2i_C
\quad\Rightarrow\quad
2C_L\frac{dv_{OUT}}{dt}=-\left(I_{SS}+\frac{v_{OUT}}{R_L}\right).
$$

这是时间常数 $\tau=2R_LC_L$、终值 $v_{OUT}\to-I_{SS}R_L$ 的一阶方程，因此跳变是指数曲线而非线性斜坡，斜率在起始时刻最大。

### 第 3 步 — 电阻负载：最大速率

最大的跳变从相反的导向状态开始，此时 M2 流过全部 $I_{SS}$：$v_{D1}=V_{DD}$，$v_{D2}=V_{DD}-I_{SS}R_L$，故 $v_{OUT}(0)=+I_{SS}R_L$。于是

$$
2C_L\frac{dv_{OUT}}{dt}\bigg|_{t=0}=-(I_{SS}+I_{SS})
\quad\Rightarrow\quad
SR=\left|\frac{dv_{OUT}}{dt}\right|_{\max}=\frac{I_{SS}}{C_L}.
$$

此时电阻电流叠加到电容电流上：在 $t=0$ 时，D2 的电阻仍导通 $I_{SS}$，这一电流全部流过 $C_L$。随着 $v_{OUT}$ 趋向 $-I_{SS}R_L$，速率按 $e^{-t/2R_LC_L}$ 衰减。若从平衡状态（$v_{OUT}=0$）开始，初始速率只有 $I_{SS}/(2C_L)$，因此使用电阻时压摆率取决于输出所处的状态，其最大值为 $I_{SS}/C_L$。
