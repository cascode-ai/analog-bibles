# 详细步骤 - R653

**思路。** 采用锁定状态下 PLL 的线性相位域模型，把 $V_{ex}$ 视为加在 VCO 控制节点上的第二个输入，令输入相位为零，写出一个环路方程，并由它解出 $\Phi_{out}/V_{ex}$。

### 第 1 步 — 各模块的线性模型

取 $\Phi_{in} = 0$（输入纯净），各模块给出

$$V_{PD} = K_{PD}\,(\Phi_{in} - \Phi_{out}) = -K_{PD}\,\Phi_{out}, \qquad V_{LPF} = \frac{V_{PD}}{1 + s/\omega_{LPF}} .$$

由图可知，$V_{ex}$ 是在滤波器**之后**加入的，$V_{cont} = V_{LPF} + V_{ex}$。VCO 的剩余频率为 $K_{VCO}V_{cont}$，而相位是它的积分：

$$\Phi_{out} = \frac{K_{VCO}}{s}\,V_{cont}.$$

### 第 2 步 — 写出环路方程

依次代入加法器、滤波器和鉴相器的关系：

$$\Phi_{out} = \frac{K_{VCO}}{s}\left(V_{LPF} + V_{ex}\right) = \frac{K_{VCO}}{s}\left(V_{ex} - \frac{K_{PD}}{1 + s/\omega_{LPF}}\,\Phi_{out}\right).$$

### 第 3 步 — 求解 $\Phi_{out}/V_{ex}$

展开并合并含 $\Phi_{out}$ 的项：

$$
\begin{aligned}
\Phi_{out} &= \frac{K_{VCO}}{s}\,V_{ex} - \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\,\Phi_{out}\\
\Phi_{out}\left[1 + \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}\right] &= \frac{K_{VCO}}{s}\,V_{ex}.
\end{aligned}
$$

两边同乘 $s\,(1 + s/\omega_{LPF})$：

$$\Phi_{out}\left[s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{PD}K_{VCO}\right] = K_{VCO}\left(1 + \frac{s}{\omega_{LPF}}\right)V_{ex},$$

因此，利用 $s(1 + s/\omega_{LPF}) = s + s^2/\omega_{LPF}$，得

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + \dfrac{s}{\omega_{LPF}}\right)}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} .$$

分子、分母同乘 $\omega_{LPF}$，得到多项式形式

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

**量纲检查。** $K_{VCO}$ 的单位是 rad/(s·V)，$(s + \omega_{LPF})/(s^2 + \dots)$ 的单位是 s，因此结果的单位是 rad/V。

### 第 4 步 — 用标准 PLL 记号表示极点和零点

分母与这个 I 型 PLL 通常的闭环响应 $\Phi_{out}/\Phi_{in}$ 的分母相同，因为极点属于环路本身，而与注入点无关。与 $s^2 + 2\zeta\omega_ns + \omega_n^2$ 比较：

$$
\begin{aligned}
\omega_n^2 &= \omega_{LPF}K_{PD}K_{VCO} &&\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}},\\
2\zeta\omega_n &= \omega_{LPF} &&\Rightarrow\quad \zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}}.
\end{aligned}
$$

因此

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,(s + 2\zeta\omega_n)}{s^2 + 2\zeta\omega_ns + \omega_n^2}.$$

**$s = -\omega_{LPF}$ 处的零点**之所以出现，是因为 $V_{ex}$ 在滤波器之后进入：滤波器只作用于反馈回来的信号。（$\Phi_{out}/\Phi_{in} = \omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$ 没有这样的零点。）

### 第 5 步 — 低频与高频极限

**低频（$s \to 0$）：**

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to0} = \frac{K_{VCO}\,\omega_{LPF}}{\omega_{LPF}K_{PD}K_{VCO}} = \frac{1}{K_{PD}}.$$

由终值定理，$V_{ex}$ 上的阶跃 $\Delta V$（其变换为 $\Delta V/s$）产生的最终剩余相位为

$$\phi_{out}(\infty) = \lim_{s\to0} s\cdot\frac{\Delta V}{s}\cdot\frac{\Phi_{out}}{V_{ex}}(s) = \frac{\Delta V}{K_{PD}}.$$

**物理验证。** 锁定时 $\omega_{out}$ 回到 $\omega_{in}$，因此 $V_{cont}$ 回到原值；由于 $V_{ex}$ 升高了 $\Delta V$，滤波器的输出（在直流下即鉴相器的输出）必须下降 $\Delta V$：

$$K_{PD}\,\Delta(\Phi_{in} - \Phi_{out}) = -\Delta V \quad\Rightarrow\quad \Delta\Phi_{out} = \frac{\Delta V}{K_{PD}} .$$

$V_{ex}$ 的缓慢变化不改变频率，只会使静态相位发生偏移。

**高频（$s \to \infty$）：**

$$\frac{\Phi_{out}}{V_{ex}}\bigg|_{s\to\infty} \approx \frac{K_{VCO}\,s}{s^2} = \frac{K_{VCO}}{s}.$$

$V_{ex}$ 的快速变化对 VCO 的调制就像环路断开时一样：滤波器阻断了环路的校正。

**从频率的角度看。** 由 $\Omega_{out} = s\Phi_{out}$ 得

$$\frac{\Omega_{out}}{V_{ex}}(s) = \frac{K_{VCO}\,s\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}},$$

这是一个在直流处有零点的高通函数：环路会抑制由 $V_{ex}$ 引起的缓慢频率变化，但让快速变化通过。正因如此，这样的注入点可用于例如在环路带宽（loop bandwidth）以上对 PLL 进行调频。

### 结果

$$\frac{\Phi_{out}}{V_{ex}}(s) = \frac{K_{VCO}\left(1 + s/\omega_{LPF}\right)}{s^2/\omega_{LPF} + s + K_{PD}K_{VCO}} = \frac{K_{VCO}\,(s + \omega_{LPF})}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}}$$

- 极点：与 I 型 PLL 的极点相同，$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$，$2\zeta\omega_n = \omega_{LPF}$；零点位于 $s = -\omega_{LPF}$。
- 低频极限为 $1/K_{PD}$（阶跃 $\Delta V$ 使输出相位偏移 $\Delta V/K_{PD}$）；高频极限为 $K_{VCO}/s$（相当于开环调制 VCO）。

**常见错误。** 让 $V_{ex}$ 在滤波器**之前**进入。这样滤波器也会作用于 $V_{ex}$，分子就只剩 $K_{VCO}$，丢失了 $-\omega_{LPF}$ 处的零点；而图中的加法器位于 LPF 与 VCO 之间。

**常见错误。** 把 VCO 建模为单纯的增益 $K_{VCO}$，而不是积分器 $K_{VCO}/s$。没有 $1/s$，分母就会失去 $s^2$ 项，环路动态特性也就错了。

**常见错误。** 漏掉鉴相器的负号，这会得到不稳定的分母 $s^2 + \omega_{LPF}s - \omega_{LPF}K_{PD}K_{VCO}$。一个简单的检验方法：在高频下，结果必须退化为 $+K_{VCO}/s$。
