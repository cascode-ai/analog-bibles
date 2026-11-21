# 详细步骤 - G271

以运放中的压控电压源 $a$ 为参考元件应用布莱克曼公式：

$$
R_{out}=R_{out}(a{=}0)\,\frac{1+\mathcal R(\text{port shorted})}{1+\mathcal R(\text{port open})}.
$$

### 第 1 步 — 小信号电路

$M_1$ 的栅极由 $M_3$–$R$ 偏置支路保持在交流地，因此 $M_1$ 只表现为从节点 $S$（$M_2$ 的源极）到地的电阻 $r_{o1}$；$g_{m1}$ 不出现。运放的反相输入端检测 $v_S$，同相输入端接固定的 $V_{BIAS}$，故其驱动 $M_2$ 栅极的输出为 $v_G=-a\,v_S$。

### 第 2 步 — $a=0$ 时的电阻

$a=0$ 时 $M_2$ 栅极为交流地，电路是普通的共源共栅结构，$M_2$ 带源极负反馈电阻 $r_{o1}$。流入漏极的测试电流 $i_x$ 流过 $r_{o1}$（$v_S=i_xr_{o1}$，$v_{gs2}=-v_S$），并且流过 $r_{o2}$ 的电流为 $i_x-g_{m2}v_{gs2}=i_x(1+g_{m2}r_{o1})$：

$$
R_{out}(a{=}0)=r_{o1}+r_{o2}+g_{m2}r_{o2}r_{o1}=(r_{o1}+r_{o2})\left[1+g_{m2}(r_{o1}\parallel r_{o2})\right].
$$

### 第 3 步 — 输出端口短路时的回归比

在 $M_2$ 栅极用测试电压 $v_t$ 代替运放的受控源。漏极接地时，$M_2$ 是源极跟随器，其源极节点对地看到 $r_{o1}\parallel r_{o2}$；在 $S$ 列 KCL，$g_{m2}(v_t-v_S)=v_S/(r_{o1}\parallel r_{o2})$，得

$$
v_S=v_t\,\frac{g_{m2}(r_{o1}\parallel r_{o2})}{1+g_{m2}(r_{o1}\parallel r_{o2})}.
$$

受控源的返回值为 $-a\,v_S$，故

$$
\mathcal R(\text{short})=\frac{a\,g_{m2}(r_{o1}\parallel r_{o2})}{1+g_{m2}(r_{o1}\parallel r_{o2})}\approx a .
$$

### 第 4 步 — 输出端口开路时的回归比

漏极开路时，$M_2$ 与 $r_{o2}$ 同一个开路串联，因此没有电流能从上方流入节点 $S$；$r_{o1}$ 中没有电流，$v_S=0$，故

$$
\mathcal R(\text{open})=0 .
$$

### 第 5 步 — 输出电阻

$$
R_{out}=(r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2})\left[1+\frac{a\,g_{m2}(r_{o1}\parallel r_{o2})}{1+g_{m2}(r_{o1}\parallel r_{o2})}\right].
$$

利用第 2 步中 $R_{out}(a{=}0)$ 的因式分解形式，分母相消：

$$
R_{out}=(r_{o1}+r_{o2})\left[1+g_{m2}(r_{o1}\parallel r_{o2})+a\,g_{m2}(r_{o1}\parallel r_{o2})\right]=r_{o1}+r_{o2}+(1+a)\,g_{m2}r_{o1}r_{o2}\approx a\,g_{m2}r_{o1}r_{o2}.
$$

这与以 $g_{m2}$ 为参考元件时的结果相同：无论选择哪个参考元件，布莱克曼公式给出的阻抗都相同。由于 $g_{m1}=g_{m2}$（电流相同、$W/L$ 相等、$\gamma=0$），也可以用 $g_{m1}$ 代替 $g_{m2}$。
