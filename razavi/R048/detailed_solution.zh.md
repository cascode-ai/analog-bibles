# 详细步骤 - R048

**思路。** 用输出端电压表示 NMOS 的栅源电压和源-衬底电压，并分别用平方律（square law）和小信号阻抗考察电流 $I_2$ 如何随该电压变化。电流源提供的电流必须（几乎）与其端电压无关，即必须具有很高的输出阻抗。

### 第 1 步 — 端电压：总是饱和

把输出端（源极）电压记为 $V_{out}$；衬底（bulk）就是接地的 p 型衬底。于是

$$V_{GS} = V_{DD} - V_{out}, \qquad V_{DS} = V_{DD} - V_{out}, \qquad V_{SB} = V_{out} - 0 = V_{out} .$$

由于 $V_{DS} = V_{GS} \ge V_{GS} - V_{TH}$，晶体管是**二极管连接**的，只要导通就处于饱和区，与题目所述一致。

### 第 2 步 — 大信号（large-signal）电流随 $V_{out}$ 的变化

忽略沟道长度调制（channel-length modulation），

$$I_2 = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{DD} - V_{out} - V_{TH})^2 ,$$

并且由于源极电位高于接地的衬底，

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{out}} - \sqrt{2|\phi_F|}\right).$$

因此，升高 $V_{out}$ 会从两方面减小过驱动电压（overdrive voltage）$V_{DD} - V_{out} - V_{TH}$：$V_{GS}$ 一对一地下降，而 $V_{TH}$ 升高。电流按平方关系下降，一旦 $V_{out}$ 达到 $V_{DD} - V_{TH}$，器件就完全截止。

**示例。** 假设 $V_{DD} = 3$ V，$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，$W/L = 5$，$V_{TH0} = 0.7$ V，$\gamma = 0.45\ \mathrm{V^{1/2}}$，$2|\phi_F| = 0.9$ V。在 $V_{out} = 1$ V 时：

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.0} - \sqrt{0.9}\right) = 0.7 + 0.45(1.3784 - 0.9487) = 0.893\ \mathrm{V},\\
V_{GS} - V_{TH} &= 3 - 1 - 0.893 = 1.107\ \mathrm{V},\\
I_2 &= \tfrac12(134\ \mu\mathrm{A/V^2})(5)(1.107\ \mathrm{V})^2 = (335\ \mu\mathrm{A/V^2})(1.225\ \mathrm{V^2}) = 0.41\ \mathrm{mA}.
\end{aligned}
$$

| $V_{out}$（V） | 0 | 0.5 | 1.0 | 1.5 |
|---|---|---|---|---|
| $V_{TH}$（V） | 0.700 | 0.806 | 0.893 | 0.970 |
| $V_{GS} - V_{TH}$（V） | 2.30 | 1.69 | 1.11 | 0.53 |
| $I_2$（mA） | 1.77 | 0.96 | 0.41 | 0.094 |

输出电压变化 1.5 V，会使 $I_2$ 改变约 19 倍，这与电流源恰恰相反。

### 第 3 步 — 输出端的小信号阻抗

栅极和漏极（接 $V_{DD}$）以及衬底都处于交流地。在输出（源极）节点加测试电压 $v_x$，求测试源注入该节点的电流 $i_x$。在漏极与源极之间，晶体管包含 $g_mv_{gs}$（其中 $v_{gs} = 0 - v_x = -v_x$）、$g_{mb}v_{bs}$（其中 $v_{bs} = 0 - v_x = -v_x$）以及 $r_O$（其上 $v_{ds} = -v_x$）。

<!-- diagram: diagram-01.cir -->

晶体管内部从漏极流向源极的总电流到达输出节点：

$$i_{D\to S} = g_m(-v_x) + g_{mb}(-v_x) + \frac{-v_x}{r_O} = -\left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x .$$

在输出节点列 KCL，$i_x + i_{D\to S} = 0$，得到

$$i_x = \left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x, \qquad R_{out} = \frac{v_x}{i_x} = \frac{1}{g_m + g_{mb}}\parallel r_O \approx \frac{1}{g_m + g_{mb}}\qquad(g_mr_O \gg 1).$$

**数值。** 采用同一示例，$V_{out} = 1$ V：

$$
\begin{aligned}
g_m &= \mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = (670\ \mu\mathrm{A/V^2})(1.107\ \mathrm{V}) = 0.741\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} = \frac{0.45}{2\sqrt{1.9}} = 0.163,\qquad g_{mb} = \eta g_m = 0.121\ \mathrm{mS},\\
R_{out} &\approx \frac{1}{0.741 + 0.121\ \mathrm{mS}} = 1.16\ \mathrm{k}\Omega .
\end{aligned}
$$

若用相同电流的电流源并从漏极输出，其阻抗为 $r_O = 1/(\lambda I_D)$，例如当 $\lambda = 0.1\ \mathrm{V^{-1}}$ 时为 $1/[(0.1\ \mathrm{V^{-1}})(0.41\ \mathrm{mA})] = 24\ \mathrm{k}\Omega$，约高 20 倍。

### 第 4 步 — 电流源需要什么

NMOS 电流源保持其**栅源电压固定**（源极接地，栅极接偏置电压 $V_b$），并从**漏极**输出，这样输出电压只改变 $V_{DS}$，输出阻抗为 $r_O$。图中的输出是**源极**，而栅极接固定电位，因此输出电压直接进入 $V_{GS}$：该器件相当于输入固定的源极跟随器（source follower），或者相当于一个二极管，其输出是低阻抗的**电压**，而不是电流。

### 结果

该 NMOS 是**二极管连接**的（栅极 = 漏极 = $V_{DD}$），并且**源极是输出端**。它总是处于饱和区，但

$$I_2 = \tfrac12\mu_nC_{ox}\frac{W}{L}(V_{DD} - V_{out} - V_{TH})^2, \qquad V_{TH}\ \text{rising with}\ V_{out}\ \text{(body effect)},$$

因此电流强烈地（按平方关系）依赖于输出电压。从输出端看进去的阻抗只有 $\approx 1/(g_m + g_{mb})$（与 $r_O$ 并联），数值很小。电流源需要固定的 $V_{GS}$，并从漏极输出，那里的阻抗为 $r_O$。

**常见错误。** “它处于饱和区，所以电流恒定。”只有在 $V_{GS}$ 固定时，饱和才使 $I_D$ 对 $V_{DS}$ 不敏感；这里 $V_{GS} = V_{DD} - V_{out}$ 随输出一对一地变化。

**常见错误。** 认为输出阻抗为 $r_O$。从栅极处于交流地的晶体管的源极看进去，阻抗为 $1/(g_m + g_{mb})$，比 $r_O$ 小，大约相差本征增益（intrinsic gain）$g_mr_O$ 倍。

**常见错误。** 把问题归咎于线性区（triode region）工作。栅极与漏极相连时 $V_{DS} = V_{GS}$，器件永远不会进入线性区；问题在于连接方式，而不在于工作区。
