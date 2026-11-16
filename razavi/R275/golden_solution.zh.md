当 $V_{out}$ 变低时，它是被 $M_2$ 拉低的，而后者不可能把它拉到自身源极（节点 P）以下。P 大约比输入共模电平低一个 $V_{GS}$（$V_P \approx V_{in,CM} - V_{GS1,2}$），因此 $V_{min} \approx V_P + V_{DS2} \approx V_{in,CM} - V_{TH} - (\text{overdrive}) + (\text{small } V_{DS2})$：它随 $V_{in,CM}$ 一比一地升降。因此输入共模电平越高，$V_{min}$ 越高，输出摆幅（output swing）越小。

- 当 $\Delta V$ 适中（与 $\sqrt2\,V_{ov}$ 相当或更小）时，$M_1$ 并未完全截止；其电流由 $M_3$–$M_4$ 镜像。在低输出状态下，$M_2$ 只能流过 $|I_{D4}|$，而它的 $V_{GS}$ 要求更大的电流，因此高增益把 $V_{out}$ 一直往下拉，直到 $M_2$ 进入线性区（triode region），在那里它的漏极电流以很小的 $V_{DS2}$（几十 mV）与 $|I_{D4}|$ 相等。
- 因此 $V_{min} = V_P + V_{DS2}$，即比 $V_{in,CM}$ 低略多于一个阈值电压（threshold voltage），而不是接近地电位。（即使电流完全切换，只要 $M_5$ 导通，$V_{out}$ 也不可能低于 $V_P$。）
- 相比之下，$V_{max}$ 由 $M_4$ 在 $V_{DD}$ 附近进入线性区决定，几乎与 $V_{in,CM}$ 无关。
- 降低 $V_{in,CM}$ 可以降低 $V_{min}$，但只到 $M_5$ 退出饱和区（saturation region）为止。
