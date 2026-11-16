在 $t = 0^+$ 时，$M_1$（源极为 0 V）复制 $I_{REF}$：$V_X = V_b - V_{GS3}(I_{REF})$，$V_Y = V_{DD} - R_1I_{REF}$。随后该电流给 $C_1$ 充电，$M_1$ 的源极电压向 $V_{GS2} - V_{TH1}$ 上升，其电流逐渐消失：不计体效应（body effect）时，电流 ≈ $I_{REF}/(1+t/\tau)^2$，$\tau = 2C_1/\sqrt{2\beta I_{REF}}$。因此 $V_Y$ 回升并趋向 $V_{DD}$，$V_X$ 上升并趋向 $V_b - V_{TH3}(V_X)$，两者都是先快后慢。

- 随着电流消失，$V_{GS3} = V_{TH3}(V_{SB} = V_X) + \sqrt{2I_{D}/\beta}$ 减小到 $V_{TH3}$，因此 $V_X$ 的增量略小于 $\sqrt{2I_{REF}/\beta}$：$\Delta V_X = \sqrt{2I_{REF}/\beta} - [V_{TH3}(V_{X,\infty}) - V_{TH3}(V_{X,0})]$，因为升高的 $V_X$ 通过体效应使 $V_{TH3}$ 增大。
- $M_1$ 的最终源极电压为 $V_{GS2} - V_{TH1}(V_{S1})$，由于体效应，它略低于 $M_2$ 的过驱动电压（overdrive voltage）。
