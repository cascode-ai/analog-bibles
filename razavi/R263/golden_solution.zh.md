$V_X$ 恒定，等于 $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$。$V_Y$ 从 $V_{DD} - R_1I_{REF}$ 开始，随着 $C_1$ 充电、$M_1$ 的电流逐渐消失而回升并趋向 $V_{DD}$：开始时很快，之后变慢（拖尾按代数规律而非指数规律衰减）。

- 在 $t = 0^+$ 时，$M_1$ 的源极电压为 0 V，因此 $M_1$ 复制 $I_{REF}$（假设它饱和，即 $V_{DD} - R_1I_{REF} > \sqrt{2I_{REF}/\beta}$）。
- 漏极电流给 $C_1$ 充电：$V_{S1}$ 向 $V_X - V_{TH1}(V_{S1})$ 升高，过驱动电压（overdrive voltage）和电流随之减小：不计体效应（body effect）时，$I_{D1}(t) = I_{REF}/(1+t/\tau)^2$，其中 $\tau = 2C_1/g_m$，$g_m = \sqrt{2\beta I_{REF}}$；体效应使源极停在稍低一些的位置。
- $V_Y(t) = V_{DD} - R_1I_{D1}(t)$，逐渐趋近 $V_{DD}$。
