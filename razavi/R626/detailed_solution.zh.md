# 详细步骤 - R626

**思路。** 令每个输出节点处的 NMOS 电流等于 PMOS 电流，推导差分对的输入参考失调，其中包括 PMOS 电流源负载的失配。负载失配按 $g_{mP}/g_{mN}$ 缩放后折合到输入端。在电流固定时，使 $g_{mP}$ 变小的唯一方法是增大 PMOS 过驱动电压，而这正是负载从输出摆幅中占去的电压。

### 第 1 步 — 负载的电流失配

符号：$V_{ov,N}$ 和 $|V_{ov,P}|$ 分别为 $M_{1,2}$ 和 $M_{3,4}$ 的过驱动电压；$\Delta V_{TH,N} = V_{TH1} - V_{TH2}$，$\Delta V_{TH,P} = |V_{TH3}| - |V_{TH4}|$；$[\Delta(W/L)/(W/L)]_N$ 和 $[\Delta(W/L)/(W/L)]_P$ 为相对尺寸失配。每个器件的标称电流均为 $I_D = I_{SS}/2$。失调是使 $V_{out} = 0$ 的输入；此时两个漏极电压相等，因此在差模分析中沟道长度调制（channel-length modulation）的影响消失。

$M_3$ 和 $M_4$ 的栅极电压（$V_b$）和源极电压（$V_{DD}$）都相同，因此把平方律线性化得到

$$\Delta I_P = I_{D3} - I_{D4} = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\,\Delta V_{TH,P}.$$

### 第 2 步 — 输出节点处的平衡条件

在每个漏极应用 KCL，要求 $I_{D1} = I_{D3}$，$I_{D2} = I_{D4}$，因此

$$I_{D1} - I_{D2} = \Delta I_P .$$

总和 $I_{D1} + I_{D2} = I_{SS}$ 也必须与 $I_{D3} + I_{D4}$ 相等；实际中这一共模条件由共模反馈（common-mode feedback）保证，它不影响差模失调。由于源极相连，$V_{GS1} - V_{GS2} = V_{in}$，差分对线性化后的电流差为

$$I_{D1} - I_{D2} = g_{mN}\left(V_{GS1} - V_{GS2}\right) - g_{mN}\,\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N .$$

令二者相等：

$$g_{mN}V_{in} - g_{mN}\Delta V_{TH,N} + I_D\left[\frac{\Delta(W/L)}{W/L}\right]_N = I_D\left[\frac{\Delta(W/L)}{W/L}\right]_P - g_{mP}\Delta V_{TH,P}.$$

### 第 3 步 — 求解失调

两边除以 $g_{mN}$：

$$V_{in} = \Delta V_{TH,N} - \frac{I_D}{g_{mN}}\left[\frac{\Delta(W/L)}{W/L}\right]_N + \frac{g_{mP}}{g_{mN}}\left\{\frac{I_D}{g_{mP}}\left[\frac{\Delta(W/L)}{W/L}\right]_P - \Delta V_{TH,P}\right\}.$$

由 $g_m = 2I_D/V_{ov}$，得 $I_D/g_{mN} = V_{ov,N}/2$，$I_D/g_{mP} = |V_{ov,P}|/2$。各失配是随机且互不相关的，因此按功率相加：

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\}.$$

负载误差经 $g_{mP}$ 变为误差电流，输入端必须经 $g_{mN}$ 将其抵消；这就是因子 $g_{mP}/g_{mN}$ 的由来。

### 第 4 步 — 在电流固定时减小负载的贡献

尾电流使每个器件的电流都固定为 $I_D = I_{SS}/2$，因此

$$\frac{g_{mP}}{g_{mN}} = \frac{2I_D/|V_{ov,P}|}{2I_D/V_{ov,N}} = \frac{V_{ov,N}}{|V_{ov,P}|}, \qquad \frac{g_{mP}}{g_{mN}}\,\Delta V_{TH,P} = \Delta V_{TH,P}\,\frac{V_{ov,N}}{|V_{ov,P}|}.$$

这一项只有在 $g_{mP}$ 变小，即**PMOS 过驱动电压 $|V_{ov,P}|$ 变大**时才会减小。做法是减小 $(W/L)_P$，同时降低 $V_b$，使负载仍流过 $I_{SS}/2$。为了不让 $\Delta V_{TH,P} \propto 1/\sqrt{W_PL_P}$ 同时增大，较小的宽长比应通过加长沟道而不是减小宽度来实现。（PMOS 尺寸失配项化为 $(V_{ov,N}/2)[\Delta(W/L)/(W/L)]_P$，与 $|V_{ov,P}|$ 无关。）过驱动电压大的负载是一个“弱”电流源：阈值误差只使其电流改变 $\Delta I/I = 2\Delta V_{TH,P}/|V_{ov,P}|$。

### 第 5 步 — 代价：输出摆幅

负载保持饱和的条件是

$$V_{SD3} \ge |V_{ov,P}| \quad\Longrightarrow\quad V_{D} \le V_{DD} - |V_{ov,P}| ,$$

输入器件保持饱和的条件是 $V_D \ge V_{in,CM} - V_{TH,N}$，其中 $V_{in,CM}$ 为输入共模电平。因此每个输出只能在以下范围内变化：

$$V_{in,CM} - V_{TH,N} \;\le\; V_D \;\le\; V_{DD} - |V_{ov,P}| .$$

为降低失调而给 $|V_{ov,P}|$ 增加的每一毫伏，都会使每个输出的范围上限降低一毫伏，即差分峰峰值摆幅减少两毫伏。由于负载电流固定为 $I_{SS}/2$，也无法转而通过减小电流来降低 $g_{mP} = 2I_D/|V_{ov,P}|$。

**数值示例。** 设 $V_{ov,N} = 0.2$ V，$\Delta V_{TH,N} = \Delta V_{TH,P} = 3$ mV，PMOS 栅面积保持不变。

| $\lvert V_{ov,P}\rvert$ | PMOS 项 $\Delta V_{TH,P}V_{ov,N}/\lvert V_{ov,P}\rvert$ | 阈值项合计 | 最高输出电平 |
|---|---|---|---|
| 0.2 V | 3 mV | $\sqrt{3^2 + 3^2} = 4.2$ mV | $V_{DD} - 0.2$ V |
| 0.6 V | 1 mV | $\sqrt{3^2 + 1^2} = 3.2$ mV | $V_{DD} - 0.6$ V |

失调降低约四分之一，代价是每个输出损失 0.4 V 的电压余度（headroom），即差分峰峰值摆幅损失 0.8 V。

### 第 6 步 — 部分避开这一折中的方法

若用更宽的输入晶体管减小 $V_{ov,N}$，$g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$ 同样会减小；这还会降低 $\Delta V_{TH,N}$（面积更大）以及以 $V_{ov,N}$ 加权的尺寸失配项。这样做不损失输出摆幅，但会增大输入电容和面积，并使差分对的线性输入范围变窄。

### 结果

输入参考失调为

$$V_{OS}^2 = \Delta V_{TH,N}^2 + \left(\frac{V_{ov,N}}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_N^2 + \left(\frac{g_{mP}}{g_{mN}}\right)^2\left\{\Delta V_{TH,P}^2 + \left(\frac{|V_{ov,P}|}{2}\right)^2\left[\frac{\Delta(W/L)}{W/L}\right]_P^2\right\},$$

因此负载失配乘以 $g_{mP}/g_{mN} = V_{ov,N}/|V_{ov,P}|$ 后折合到输入端。在给定尾电流下，要抑制 PMOS 阈值失配，就需要较小的 $g_{mP}$，即较大的 PMOS 过驱动电压 $|V_{GS} - V_{TH}|_P$。但负载只有在 $V_{out} \le V_{DD} - |V_{GS} - V_{TH}|_P$ 时才保持饱和，因此这一过驱动电压直接从输出摆幅中扣除。**失调越低，输出摆幅越小**；而且由于电流固定，也无法转而通过改变电流来摆脱这一折中。

**常见错误。** 认为“只有输入对管感受到输入”，因而 PMOS 负载不影响失调。负载设定了差分对必须匹配的电流，因此负载电流的失配必须由输入电压 $\Delta I_P/g_{mN}$ 来抵消。

**常见错误。** 把依赖关系弄反。较大的 $|V_{ov,P}|$ 使 $g_{mP}$ 降低（失调更小），但提高了负载所需的最小 $V_{SD}$（摆幅更小）。

**常见错误。** 在长度不变的情况下减小宽度，使负载变“弱”。这会使 $\Delta V_{TH,P} \propto 1/\sqrt{WL}$ 与过驱动电压成比例地增大，因此折合项 $\Delta V_{TH,P}V_{ov,N}/|V_{ov,P}|$ 并不会改善；应当加长器件的沟道。
