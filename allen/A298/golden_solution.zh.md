$R_{out} \approx (g_{mN}r_{dsN}^2)\,\|\,(g_{mP}r_{dsP}^2) = 0.2\,g_{mN}r_{dsN}^2$；$A_v = k\,g_{mN}R_{out} = 0.2k\,(g_{mN}r_{dsN})^2$。当 $g_{mN}r_{dsP} = 100$（$g_{mN}r_{dsN} = 200$）时：$R_{out} = 40\,r_{dsN}$，$A_v \approx 8\times10^3\,k$（k = 1 时为 8000 V/V，k = 10 时为 8×10⁴）。

- 输出共源共栅（cascode）：n 沟道 M12/M11 为 $g_{mN}r_{dsN}^2$；p 沟道 M7/M6 为 $g_{mP}r_{dsP}^2 = g_{mN}r_{dsN}^2/4$；并联：$0.2g_{mN}r_{dsN}^2$。
- M1、M2 中的输入电流 $\pm0.5g_{mN}v_{in}$ 流过二极管连接的 M3、M4，在 M8 和 M6 中乘以 k，M8 的电流经 M9–M11 反转方向，二者在输出端相加：输出电流为 $k\,g_{mN}v_{in}$。
