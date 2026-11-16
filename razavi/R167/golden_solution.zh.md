当 $V_{in1} - V_{in2} = (1 - 1/\sqrt2)\sqrt{I_{SS}/\beta} \approx 0.29\sqrt{I_{SS}/\beta}$ 时两个电流相等（$V_{in1}$ 较高）。
- 曲线草图：$I_{D1} + I_{D2} = I_{SS}$，两条交叉曲线相对于对称差分对向右平移。当 $V_{in1} = V_{in2}$（$V_{GS}$ 相等）时，$I_{D2} = 2I_{D1}$：$I_{D1} = I_{SS}/3$，$I_{D2} = 2I_{SS}/3$。
- 当 $V_{in1} - V_{in2} \le -\sqrt{I_{SS}/\beta}$ 时 $M_1$ 截止（$I_{D2} = I_{SS}$），该值为 2W 器件在 $I_{SS}$ 下的过驱动电压（overdrive voltage）；当 $V_{in1} - V_{in2} \ge \sqrt{2I_{SS}/\beta}$ 时 $M_2$ 截止（$I_{D1} = I_{SS}$）。因此过渡区相对于零点不对称，两条曲线也不关于交点成镜像。
- 电流相等：$V_{GS1} - V_{GS2} = \sqrt{2(I_{SS}/2)/\beta} - \sqrt{2(I_{SS}/2)/(2\beta)} = \sqrt{I_{SS}/\beta}\,(1 - 1/\sqrt2)$。这一偏移的作用相当于输入失调（input offset）。
