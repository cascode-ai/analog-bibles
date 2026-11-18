$R_{out} \approx 0.2\,g_{mN}r_{dsN}^2 = 20\,r_{dsN}$；差模增益 $A_v = k\,g_{mN}R_{out} = 0.2k(g_{mN}r_{dsN})^2 = 2.0\times10^4$ V/V；第一级增益 ≈ −5 V/V。

- 输出电阻：n 沟道共源共栅（cascode）M12/M11 为 $g_{mN}r_{dsN}^2$；p 沟道共源共栅 M7/M6 为 $g_{mP}r_{dsP}^2 = g_{mN}r_{dsN}^2/4$；二者并联为 $0.2\,g_{mN}r_{dsN}^2$。
- 输入在 M1 和 M2 中产生 $\pm0.5g_{mN}v_{in}$；二极管负载 M3 和 M4 把这些电流乘以 k 后传给 M8 和 M6；M8 的电流经 M9–M11 反转方向，因此输出电流为 $k\,g_{mN}v_{in}$，$A_v = kg_{mN}R_{out} = 10\times0.2\times100^2 = 2.0\times10^4$。
- 第一级：$0.5g_{mN}v_{in}$ 流入二极管连接的 M3（$1/g_{m3}$，$g_{m3} = 0.1g_{mP} = 0.1g_{mN}$）：$A_{v1} = -0.5g_{mN}/(0.1g_{mN}) = -5$。
