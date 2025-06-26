# 1. Chọn image Node
FROM node:20

# 2. Đặt thư mục làm việc trong container
WORKDIR /app

# 3. Copy package.json và package-lock.json trước để cài sớm (tối ưu cache)
COPY package*.json ./

# 4. Cài đặt dependencies
RUN npm install

# 5. Copy toàn bộ source vào container
COPY . .

# 6. Tạo thư mục build (nếu dùng Babel build)
RUN npm run build

# 7. Lệnh để chạy app
CMD ["npm", "start"]
